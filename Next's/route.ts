// app/projects/[id]/page.tsx

interface PageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: PageProps) {
  return <h1>Project: {params.id}</h1>;
}