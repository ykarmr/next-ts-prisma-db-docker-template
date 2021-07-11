import { sampleCastUser } from '@/types/sample/sampleType'
import axios from 'axios';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import Link from 'next/link'
export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const SampleId: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const { data, error } = useSWR<sampleCastUser , Error>(`/api/sample/${id}`, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.posts && data.posts[0].title}</p>
            <p>{data.posts && data.posts[0].content}</p>
            <p><Link href={`/sample`}><a>戻る</a></Link></p>
        </>
    )
}

export default SampleId