import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewsletterSignup() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { 
        email: data.email,
        subscribedAt: new Date()
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe to the newsletter. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section className="py-16 bg-[#0047FF] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          
          <div className="bg-[#f9f9f9] text-black p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Save up to 80% with talentfi</h3>
            
            <div className="flex justify-center mt-8">
              {/* talentfi Column */}
              <div className="bg-[#4caf50] p-6 rounded-lg text-white max-w-lg">
                <h4 className="text-xl font-bold text-center mb-6">talentfi: $500</h4>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-3 items-center">
                    <div className="text-left font-semibold">Pricing Model</div>
                    <div className="col-span-2 text-left">Flat fee of $500 per employee per month</div>
                  </div>
                  
                  <div className="grid grid-cols-3 items-center">
                    <div className="text-left font-semibold">Employee Costs</div>
                    <div className="col-span-2 text-left">Fixed flat rate. No hidden fees.</div>
                  </div>
                  
                  <div className="grid grid-cols-3 items-center">
                    <div className="text-left font-semibold">Contractor Costs</div>
                    <div className="col-span-2 text-left">Free to manage contractors and $25 per contractor, per month to process payments.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
