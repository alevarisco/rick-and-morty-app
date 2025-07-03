import DetailLocation from "@/components/ui/detail/DetailLocation"

export default async function LocationDetail({params}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params

  return (
    <DetailLocation id={id}/>
  )
}