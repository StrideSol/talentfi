import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Content } from "@shared/schema";

export default function FeaturedContent() {
  const { data: featuredContent, isLoading, error } = useQuery<Content[]>({
    queryKey: ["/api/content/featured"],
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Content</h2>
          <p className="text-[#4a5568]">Discover our latest research and educational materials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading state
            Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-5 w-16 bg-gray-200 rounded-full mb-2 animate-pulse" />
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse w-2/3" />
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading featured content. Please try again later.
            </div>
          ) : (
            featuredContent?.map((item) => (
              <Card key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm bg-[#f7f7f7] text-[#2d2d2d] px-3 py-1 rounded-full">
                      {/* Show category name */}
                      {item.categoryId === 1 ? "Faith" : item.categoryId === 2 ? "Society" : "History"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#4a5568] mb-4">{item.excerpt}</p>
                  <div className="flex items-center text-sm text-[#4a5568]">
                    <span>By {item.author}</span>
                    <span className="mx-2">•</span>
                    <span>{item.readTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="inline-block bg-white border border-[#0047FF] text-[#0047FF] py-2 px-6 rounded-md font-semibold hover:bg-[#f7f7f7]"
          >
            View All Content
          </Button>
        </div>
      </div>
    </section>
  );
}
