import { sampleCastUser } from '@/types/sample/sampleType'
import axios from 'axios';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import Link from 'next/link'

export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const Sample: React.FC = () => {
    const router = useRouter()

    const { data, error } = useSWR<sampleCastUser[] , Error>(`/api/sample`, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            {data.map((item)=>{
                return(
                    <>
                        <p><Link href={`/sample/${String(item.id)}`}><a>{item.id}</a></Link></p>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.posts && item.posts[0].title}</p>
                        <p>{item.posts && item.posts[0].content}</p>
                    </>
                )
            })}
        </>
    )
}

export default Sample