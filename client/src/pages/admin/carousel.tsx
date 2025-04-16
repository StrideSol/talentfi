import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Trash2, Upload, Edit, Eye, Plus } from "lucide-react";
import { type CarouselSlide } from "@shared/schema";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function CarouselAdmin() {
  const [selectedSlide, setSelectedSlide] = useState<CarouselSlide | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Form state for create/edit
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    order: number;
    isActive: boolean;
  }>({
    title: "",
    description: "",
    primaryButtonText: "",
    primaryButtonUrl: "",
    secondaryButtonText: "",
    secondaryButtonUrl: "",
    order: 0,
    isActive: true
  });

  // Fetch all carousel slides
  const { data: slides, isLoading } = useQuery<CarouselSlide[]>({
    queryKey: ['/api/carousel'],
    refetchOnWindowFocus: false,
  });

  // Create a new slide
  const createSlideMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await apiRequest("POST", "/api/carousel", formData, true as any);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Carousel slide created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/carousel'] });
      setIsCreateDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to create slide: ${error.message}`,
      });
    },
  });

  // Update a slide
  const updateSlideMutation = useMutation({
    mutationFn: async ({ id, formData }: { id: number; formData: FormData }) => {
      const response = await apiRequest("PUT", `/api/carousel/${id}`, formData, true as any);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Carousel slide updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/carousel'] });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to update slide: ${error.message}`,
      });
    },
  });

  // Delete a slide
  const deleteSlideMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/carousel/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Carousel slide deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/carousel'] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to delete slide: ${error.message}`,
      });
    },
  });

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle switch input for isActive
  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      isActive: checked,
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      primaryButtonText: "",
      primaryButtonUrl: "",
      secondaryButtonText: "",
      secondaryButtonUrl: "",
      order: 0,
      isActive: true
    });
    setUploadedImage(null);
    setPreviewImage(null);
    setSelectedSlide(null);
  };

  // Open edit dialog
  const openEditDialog = (slide: CarouselSlide) => {
    setSelectedSlide(slide);
    setFormData({
      title: slide.title,
      description: slide.description,
      primaryButtonText: slide.primaryButtonText,
      primaryButtonUrl: slide.primaryButtonUrl,
      secondaryButtonText: slide.secondaryButtonText,
      secondaryButtonUrl: slide.secondaryButtonUrl,
      order: slide.order,
      isActive: slide.isActive
    });
    setPreviewImage(slide.imageUrl);
    setIsEditDialogOpen(true);
  };

  // Open preview dialog
  const openPreviewDialog = (slide: CarouselSlide) => {
    setSelectedSlide(slide);
    setIsPreviewDialogOpen(true);
  };

  // Handle create form submission
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uploadedImage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload an image for the carousel slide",
      });
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("image", uploadedImage);
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("primaryButtonText", formData.primaryButtonText);
    formDataToSubmit.append("primaryButtonUrl", formData.primaryButtonUrl);
    formDataToSubmit.append("secondaryButtonText", formData.secondaryButtonText);
    formDataToSubmit.append("secondaryButtonUrl", formData.secondaryButtonUrl);
    formDataToSubmit.append("order", formData.order.toString());
    formDataToSubmit.append("isActive", formData.isActive.toString());

    createSlideMutation.mutate(formDataToSubmit);
  };

  // Handle edit form submission
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlide) return;

    const formDataToSubmit = new FormData();
    if (uploadedImage) {
      formDataToSubmit.append("image", uploadedImage);
    }
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("primaryButtonText", formData.primaryButtonText);
    formDataToSubmit.append("primaryButtonUrl", formData.primaryButtonUrl);
    formDataToSubmit.append("secondaryButtonText", formData.secondaryButtonText);
    formDataToSubmit.append("secondaryButtonUrl", formData.secondaryButtonUrl);
    formDataToSubmit.append("order", formData.order.toString());
    formDataToSubmit.append("isActive", formData.isActive.toString());

    updateSlideMutation.mutate({ id: selectedSlide.id, formData: formDataToSubmit });
  };

  // Handle delete
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this carousel slide?")) {
      deleteSlideMutation.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading carousel slides...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Carousel Management</h1>
        <Button onClick={() => {
          resetForm();
          setIsCreateDialogOpen(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Add Slide
        </Button>
      </div>

      {slides && slides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide) => (
            <div key={slide.id} className="border rounded-lg shadow-sm overflow-hidden bg-white">
              <div className="relative aspect-video bg-gray-100">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                {!slide.isActive && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Inactive
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg truncate">{slide.title}</h3>
                <p className="text-gray-500 text-sm mb-2">Order: {slide.order}</p>
                <p className="text-sm line-clamp-2 mb-4">{slide.description}</p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openPreviewDialog(slide)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> Preview
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(slide)}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(slide.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 border rounded-lg">
          <p className="text-gray-500 mb-4">No carousel slides found.</p>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create Your First Slide
          </Button>
        </div>
      )}

      {/* Create Slide Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Carousel Slide</DialogTitle>
            <DialogDescription>
              Add a new slide to the homepage carousel.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    name="order"
                    type="number"
                    value={formData.order.toString()}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryButtonText">Primary Button Text</Label>
                  <Input
                    id="primaryButtonText"
                    name="primaryButtonText"
                    value={formData.primaryButtonText}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primaryButtonUrl">Primary Button URL</Label>
                  <Input
                    id="primaryButtonUrl"
                    name="primaryButtonUrl"
                    value={formData.primaryButtonUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
                  <Input
                    id="secondaryButtonText"
                    name="secondaryButtonText"
                    value={formData.secondaryButtonText}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondaryButtonUrl">Secondary Button URL</Label>
                  <Input
                    id="secondaryButtonUrl"
                    name="secondaryButtonUrl"
                    value={formData.secondaryButtonUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('image-upload')?.click()}
                    className="w-full justify-center"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Upload Image
                  </Button>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    required
                  />
                  
                  {previewImage && (
                    <div className="relative w-32 h-20">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        onClick={() => {
                          setUploadedImage(null);
                          setPreviewImage(null);
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  resetForm();
                  setIsCreateDialogOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={createSlideMutation.isPending}>
                {createSlideMutation.isPending && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create Slide
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Slide Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Carousel Slide</DialogTitle>
            <DialogDescription>
              Update the details of this carousel slide.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-order">Display Order</Label>
                  <Input
                    id="edit-order"
                    name="order"
                    type="number"
                    value={formData.order.toString()}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-primaryButtonText">Primary Button Text</Label>
                  <Input
                    id="edit-primaryButtonText"
                    name="primaryButtonText"
                    value={formData.primaryButtonText}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-primaryButtonUrl">Primary Button URL</Label>
                  <Input
                    id="edit-primaryButtonUrl"
                    name="primaryButtonUrl"
                    value={formData.primaryButtonUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-secondaryButtonText">Secondary Button Text</Label>
                  <Input
                    id="edit-secondaryButtonText"
                    name="secondaryButtonText"
                    value={formData.secondaryButtonText}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-secondaryButtonUrl">Secondary Button URL</Label>
                  <Input
                    id="edit-secondaryButtonUrl"
                    name="secondaryButtonUrl"
                    value={formData.secondaryButtonUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="edit-image">Image</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('edit-image-upload')?.click()}
                    className="w-full justify-center"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Change Image
                  </Button>
                  <Input
                    id="edit-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  
                  {previewImage && (
                    <div className="relative w-32 h-20">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="edit-isActive"
                  checked={formData.isActive}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="edit-isActive">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  resetForm();
                  setIsEditDialogOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={updateSlideMutation.isPending}
              >
                {updateSlideMutation.isPending && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Update Slide
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Preview Slide Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Slide Preview</DialogTitle>
          </DialogHeader>
          {selectedSlide && (
            <>
              <div className="bg-[#0047FF] rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-3">{selectedSlide.title}</h2>
                    <p className="mb-4">{selectedSlide.description}</p>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button
                        className="bg-[#FF9500] hover:bg-[#E68600] text-white"
                      >
                        {selectedSlide.primaryButtonText}
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white border border-[#0047FF] text-[#0047FF] hover:bg-[#f7f7f7]"
                      >
                        {selectedSlide.secondaryButtonText}
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={selectedSlide.imageUrl} 
                      alt={selectedSlide.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded mt-4 text-xs font-mono">
                <p>ID: {selectedSlide.id}</p>
                <p>Order: {selectedSlide.order}</p>
                <p>Status: {selectedSlide.isActive ? 'Active' : 'Inactive'}</p>
                <p>Created: {new Date(selectedSlide.createdAt).toLocaleString()}</p>
                <p>Updated: {new Date(selectedSlide.updatedAt).toLocaleString()}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}