import DetailEpisode from "@/components/ui/detail/DetailEpisode";

export default async function EpisodeDetail({params}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params

  return (
    <DetailEpisode id={id}/>
  )
}