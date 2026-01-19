import Nb from "@/components/nb";
import { parseProject } from "../utils";
import Markdown from "@/components/markdown";
import Link from "next/link";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const p = parseProject(slug);

  return (
    <>
      {/* Main Content */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-4 2xl:col-span-7 2xl:col-start-1">
        <div className="text-4xl font-bold flex justify-start mb-10">
          {p.metadata.title || p.slug}
        </div>
        <div className="">
          {typeof p.content === "string" ? (
            <Markdown source={p.content} />
          ) : (
            <Nb nb={p.content} />
          )}
        </div>
        <div className="h-4" />
      </div>

      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-3 lg:col-start-9 2xl:col-start-10">
        <div className="lg:sticky lg:top-0 bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
          <div className="text-sm font-bold text-primary-900 mb-4">
            Project Info
          </div>

          {p.metadata.date && (
            <div className="mb-4">
              <div className="text-xs font-semibold text-neutral-600 mb-1">
                Date
              </div>
              <div className="text-sm text-neutral-700">
                {new Date(p.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          )}

          {p.metadata.github && (
            <div className="mb-4">
              <div className="text-xs font-semibold text-neutral-600 mb-1">
                Repository
              </div>
              <Link href={p.metadata.github} className="text-sm link break-all">
                GitHub →
              </Link>
            </div>
          )}

          {p.metadata.tags && p.metadata.tags.length > 0 && (
            <div className="mb-4">
              <div className="text-xs font-semibold text-neutral-600 mb-1">
                Tags
              </div>
              <div className="flex flex-wrap gap-1">
                {p.metadata.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary-50 border border-primary-200 text-primary-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
