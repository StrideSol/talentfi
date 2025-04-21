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
    <section className="py-16 bg-[#002255] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Employer of Record</h2>
          </div>

          <div className="mb-10 mt-6">
            <div className="text-6xl font-bold">$599</div>
            <div className="text-xl mt-2">per employee/month</div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Hire without opening a local entity</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Guided onboarding</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Local payroll paid on time, every time</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Built-in security and compliance</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Flexible, localized benefits</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Offer equity incentives with tax assistance</div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#E6F0FF] p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-[#002255]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>Dedicated experts for local support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
