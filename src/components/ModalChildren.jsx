import { useQuery } from "@tanstack/react-query";
export default function ModalChildren({moveName, moveUrl}) {

    const fetchMoveData = async () => {
        if (!moveUrl || moveUrl === 'null') return null;
        const res = await fetch(moveUrl);
        return res.json();
    }

    const {data: moveData, error: moveErr, isLoading: moveLoading } = useQuery({
        queryKey: ['move', moveUrl, moveName],
        queryFn: fetchMoveData,
        enabled: !!moveUrl,
    });

    if (moveLoading) return <div><h4>Move Loading...</h4></div>;
    if (moveErr) return <p>Error: {moveErr.message}</p>
    if (!moveData) return <p>No move data found.</p>;

    const description = moveData?.flavor_text_entries.filter(val => (
        val.version_group.name === 'firered-leafgreen'
    ))[0]?.flavor_text;

  return (
    <>
        <div>
            <h6>Name</h6>
            <h2 className='skill-name'>{moveName.replaceAll('-', ' ')}</h2>
        </div>
        <div>
            <h6>Description</h6>
            <p>{description}</p>
        </div>
    </>
  )
}
