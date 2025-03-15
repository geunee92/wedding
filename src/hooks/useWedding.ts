import { Wedding } from '@/types/wedding'
import { getWedding } from '../api/wedding'
import { useQuery } from 'react-query'

function useWedding() {
  const { data } = useQuery<Wedding>(
    ['wedding'],
    () =>
      getWedding().then((res) => {
        if (!res.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      }),
    {
      suspense: true,
    },
  )

  return {
    wedding: data,
  }
}

export default useWedding
