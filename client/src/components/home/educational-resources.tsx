import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Content } from "@shared/schema";

export default function EducationalResources() {
  const { data: resources, isLoading, error } = useQuery<Content[]>({
    queryKey: ["/api/content/resources"],
  });

  return (
    <section className="py-12 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Country Guides & Resources</h2>
          <p className="text-[#4a5568]">Essential information for employers expanding into new markets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array(4)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-40 bg-gray-200 animate-pulse" />
                  <CardContent className="p-5">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading country guides. Please try again later.
            </div>
          ) : (
            resources?.slice(0, 4).map((resource) => (
              <Card
                key={resource.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-300">
                  {resource.imageUrl && (
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-[#4a5568] mb-3">{resource.excerpt}</p>
                  <a
                    href={`/resources/${resource.slug}`}
                    className="text-[#0047FF] text-sm font-semibold hover:underline"
                  >
                    View Guide →
                  </a>
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
            Browse All Country Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
