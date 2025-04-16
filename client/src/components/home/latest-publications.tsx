import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Content } from "@shared/schema";

export default function LatestPublications() {
  const { data: publications, isLoading, error } = useQuery<Content[]>({
    queryKey: ["/api/content/publications"],
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
          <p className="text-[#4a5568]">Stay updated with global employment trends and compliance updates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col h-full">
                  <div className="h-48 bg-gray-200 rounded-t-lg animate-pulse" />
                  <div className="flex-1 border border-gray-200 border-t-0 rounded-b-lg p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse w-3/4" />
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading insights. Please try again later.
            </div>
          ) : (
            publications?.slice(0, 3).map((pub) => (
              <div key={pub.id} className="flex flex-col h-full">
                <div className="h-48 bg-gray-300 rounded-t-lg">
                  {pub.imageUrl && (
                    <img
                      src={pub.imageUrl}
                      alt={pub.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  )}
                </div>
                <div className="flex-1 border border-gray-200 border-t-0 rounded-b-lg p-6">
                  <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                  <p className="text-sm text-[#4a5568] mb-4">{pub.excerpt}</p>
                  <div className="mt-auto">
                    <a
                      href={`/publications/${pub.slug}`}
                      className="text-[#0047FF] font-semibold text-sm hover:underline"
                    >
                      Read Publication →
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="inline-block bg-white border border-[#0047FF] text-[#0047FF] py-2 px-6 rounded-md font-semibold hover:bg-[#f7f7f7]"
          >
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
}
