import WaitList from "@/components/waitlist";
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const source = router.query.source || "waitingList"
  
    return (
      <main>
        <WaitList tier={source} />
      </main>
    )
  }