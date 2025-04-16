import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Event } from "@shared/schema";
import { format } from "date-fns";
import { MapPin } from "lucide-react";

export default function UpcomingEvents() {
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-[#4a5568]">Join us for lectures, workshops, and conferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm animate-pulse">
                  <div className="w-1/4 bg-gray-200 p-4" />
                  <div className="w-3/4 p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse w-3/4" />
                    <div className="h-4 w-40 bg-gray-200 rounded mb-3 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading events. Please try again later.
            </div>
          ) : events?.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No upcoming events at this time. Check back soon!
            </div>
          ) : (
            events?.slice(0, 2).map((event) => {
              const eventDate = new Date(event.eventDate);
              return (
                <div
                  key={event.id}
                  className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-1/4 bg-[#0047FF] text-white flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-2xl font-bold">
                      {format(eventDate, "dd")}
                    </span>
                    <span className="text-sm">
                      {format(eventDate, "MMM").toUpperCase()}
                    </span>
                    <span className="text-sm">
                      {format(eventDate, "yyyy")}
                    </span>
                  </div>
                  <div className="w-3/4 p-6">
                    <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-sm text-[#4a5568] mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-[#4a5568]">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        className="mt-3 inline-block text-[#0047FF] text-sm font-semibold hover:underline"
                      >
                        Register →
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="inline-block bg-white border border-[#0047FF] text-[#0047FF] py-2 px-6 rounded-md font-semibold hover:bg-[#f7f7f7]"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
