import ArrowRight from "@/components/common/Icons/ArrowRight";
import Bullet from "@/components/common/Icons/Bullet";
import { activityDictionary } from "@/constants/activityDictionary";
import { ActivityList } from "@/interfaces/activity";
import { formatDayOfWeek } from "@/utils/formatDayOfWeek";
import Link from "next/link";

export default function Activity({activityList}: ActivityList) {
  return (
    <section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
    <h2 className="pb-5 border-b border-secondary text-base font-bold">Tu actividad</h2>
    <ul className="flex flex-col gap-5">
        {activityList.map((activity) => (
          <li key={activity.id} className="w-full pb-5 flex flex-row justify-between items-center border-b border-secondary">
            <div className="flex flex-row gap-4">
              <Bullet className="fill-primary" />
              <h3>{activityDictionary[activity.type as keyof typeof activityDictionary]}</h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-md">$ {activity.amount},00</span>
            <span className="text-sm opacity-50">{formatDayOfWeek(activity.dated)}</span>
          </div>
        </li>
        ))}
    </ul>
    <Link href="/dashboard/activity" className="flex flex-row justify-between">
        <span className="text-base text-black font-bold">Ver toda tu actividad</span>
        <ArrowRight />
    </Link>
  </section>
  )
}