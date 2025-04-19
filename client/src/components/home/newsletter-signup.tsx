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
          
          <div className="bg-[#f9f9f9] text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Save up to 80% with talentfi</h3>
            
            <p className="mb-4">We are a radically transparent company and you will always know what you pay for. Here are a few reasons startups to Fortune 500 companies choose talentfi.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* talentfi Column */}
              <div className="bg-[#4caf50] p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold text-center mb-6">talentfi</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-2">Pricing Model</h5>
                    <p>Fixed flat rate. No hidden fees.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Employee Costs</h5>
                    <p>Starts from $199/per employee, per month, no matter your company size.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Contractor Costs</h5>
                    <p>Free to manage contractors and $25 per contractor, per month to process payments.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Global Coverage</h5>
                    <p>Employ talent in 185+ countries.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Visas and Work Permits</h5>
                    <p>Provides Visas and Work Permits in 85+ countries (the largest coverage in the world for EOR).</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Customer Support</h5>
                    <p>Dedicated account manager, 24/5 customer service, help articles, and online chat. Get things solved in hours, not days.</p>
                  </div>
                </div>
              </div>
              
              {/* Other providers Column */}
              <div className="bg-white p-6 rounded-lg text-gray-800">
                <h4 className="text-xl font-bold text-center mb-6">Other providers</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-2">Pricing Model</h5>
                    <p>Other hidden fees and costs.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Employee Costs</h5>
                    <p>Starts from $599/per employee, per month and can go up to $1000/per employee, per month.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Contractor Costs</h5>
                    <p>2× (or more) the cost per contractor to manage and process payments.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Global Coverage</h5>
                    <p>Hire employees in 150+ countries.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Visas and Work Permits</h5>
                    <p>Provide Visas in 25+ countries, or not at all.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Customer Support</h5>
                    <p>24/5 support, live chat, email, or web form fill out.</p>
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
