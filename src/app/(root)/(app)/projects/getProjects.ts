import { IProject } from '@/types'
import timeFromNow from '@/utils/time-from-now'
import 'server-only'
import p1 from '@/assets/pic/p1.jpg'
import p2 from '@/assets/pic/p2.jpg'
import p3 from '@/assets/pic/p3.jpg'
import p4 from '@/assets/pic/p4.jpg'
import p5 from '@/assets/pic/p5.jpg'
import p6 from '@/assets/pic/p6.jpg'
import p7 from '@/assets/pic/p7.jpg'
import p8 from '@/assets/pic/p8.jpg'
import p9 from '@/assets/pic/p9.jpg'
import p10 from '@/assets/pic/p10.jpg'

const myData = [
  {
    project_image: p1,
  },
  {
    project_image: p2,
  },
  {
    project_image: p3,
  },
  {
    project_image: p4,
  },
  {
    project_image: p5,
  },
  {
    project_image: p6,
  },
  {
    project_image: p7,
  },
  {
    project_image: p8,
  },
  {
    project_image: p9,
  },
  {
    project_image: p10,
  },
]

const getProjects = async () => {
  return myData
}

export default getProjects
