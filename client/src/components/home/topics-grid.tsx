import { useQuery } from "@tanstack/react-query";
import { ContentCategory } from "@shared/schema";
import {
  BookOpen,
  Users,
  Landmark,
  Scale,
  Heart,
  GraduationCap,
  Globe,
  Microscope,
} from "lucide-react";

// Fallback icons in case the data doesn't have them
const categoryIcons: Record<string, React.ReactNode> = {
  "faith": <BookOpen className="text-[#00b0b9] h-8 w-8" />,
  "society": <Users className="text-[#00b0b9] h-8 w-8" />,
  "history": <Landmark className="text-[#00b0b9] h-8 w-8" />,
  "law": <Scale className="text-[#00b0b9] h-8 w-8" />,
  "spirituality": <Heart className="text-[#00b0b9] h-8 w-8" />,
  "education": <GraduationCap className="text-[#00b0b9] h-8 w-8" />,
  "culture": <Globe className="text-[#00b0b9] h-8 w-8" />,
  "science": <Microscope className="text-[#00b0b9] h-8 w-8" />,
};

// If data isn't available, use this fallback
const fallbackTopics = [
  {
    id: 1,
    name: "Faith",
    slug: "faith",
    icon: "faith",
    description: "Theology, spirituality, and religious practice",
  },
  {
    id: 2,
    name: "Society",
    slug: "society",
    icon: "society",
    description: "Social issues, ethics, and community development",
  },
  {
    id: 3,
    name: "History",
    slug: "history",
    icon: "history",
    description: "Islamic history and historical analysis",
  },
  {
    id: 4,
    name: "Law",
    slug: "law",
    icon: "law",
    description: "Islamic jurisprudence and legal theory",
  },
  {
    id: 5,
    name: "Spirituality",
    slug: "spirituality",
    icon: "spirituality",
    description: "Inner dimensions of faith and spiritual growth",
  },
  {
    id: 6,
    name: "Education",
    slug: "education",
    icon: "education",
    description: "Teaching methods and educational resources",
  },
  {
    id: 7,
    name: "Culture",
    slug: "culture",
    icon: "culture",
    description: "Art, literature, and cultural expressions",
  },
  {
    id: 8,
    name: "Science",
    slug: "science",
    icon: "science",
    description: "Islamic perspectives on scientific topics",
  },
];

export default function TopicsGrid() {
  const { data: topics, isLoading, error } = useQuery<ContentCategory[]>({
    queryKey: ["/api/categories"],
  });

  // Use API data if available, otherwise fallback to predefined topics
  const displayTopics = topics?.length ? topics : fallbackTopics;

  return (
    <section className="py-12 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Explore Topics</h2>
          <p className="text-[#4a5568]">Discover research and resources by subject area</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center shadow-md animate-pulse">
                  <div className="mx-auto mb-4 w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="h-5 bg-gray-200 rounded mb-2 mx-auto w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1 mx-auto w-3/4"></div>
                </div>
              ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              Error loading topics. Please try again later.
            </div>
          ) : (
            displayTopics.map((topic) => (
              <a
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-[#00b0b9] mb-4">
                  {categoryIcons[topic.icon || topic.slug.toLowerCase()] || <BookOpen className="text-[#00b0b9] h-8 w-8 mx-auto" />}
                </div>
                <h3 className="font-bold text-lg mb-2">{topic.name}</h3>
                <p className="text-sm text-[#4a5568]">{topic.description}</p>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
