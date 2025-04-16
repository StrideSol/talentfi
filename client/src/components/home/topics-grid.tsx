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
  "compliance": <Scale className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "payroll": <BookOpen className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "benefits": <Heart className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "onboarding": <Users className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "tax": <Landmark className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "visa": <GraduationCap className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "contracts": <Microscope className="text-[#0047FF] h-8 w-8 mx-auto" />,
  "global": <Globe className="text-[#0047FF] h-8 w-8 mx-auto" />,
};

// If data isn't available, use this fallback
const fallbackTopics = [
  {
    id: 1,
    name: "Global Compliance",
    slug: "compliance",
    icon: "compliance",
    description: "Stay compliant with employment laws worldwide",
  },
  {
    id: 2,
    name: "Payroll Management",
    slug: "payroll",
    icon: "payroll",
    description: "Process payroll in multiple currencies and jurisdictions",
  },
  {
    id: 3,
    name: "Benefits Administration",
    slug: "benefits",
    icon: "benefits",
    description: "Manage competitive benefits packages for global teams",
  },
  {
    id: 4,
    name: "Employee Onboarding",
    slug: "onboarding",
    icon: "onboarding",
    description: "Streamlined hiring and onboarding for international employees",
  },
  {
    id: 5,
    name: "Tax Management",
    slug: "tax",
    icon: "tax",
    description: "Navigate complex international tax requirements",
  },
  {
    id: 6,
    name: "Visa & Immigration",
    slug: "visa",
    icon: "visa",
    description: "Simplify work permits and visa application processes",
  },
  {
    id: 7,
    name: "Employment Contracts",
    slug: "contracts",
    icon: "contracts",
    description: "Legally-compliant employment agreements for all jurisdictions",
  },
  {
    id: 8,
    name: "Global Expansion",
    slug: "global",
    icon: "global",
    description: "Strategic guidance for entering new international markets",
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
          <h2 className="text-3xl font-bold mb-2">Our EOR Services</h2>
          <p className="text-[#4a5568]">Explore our comprehensive global employment solutions</p>
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
                <div className="text-[#0047FF] mb-4">
                  {categoryIcons[topic.icon || topic.slug.toLowerCase()] || <BookOpen className="text-[#0047FF] h-8 w-8 mx-auto" />}
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
