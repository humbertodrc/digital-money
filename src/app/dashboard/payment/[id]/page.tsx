export default function PaymentServicePage({params} : {params: {id: string}}) {
  return (
    <div>{params.id}</div>
  )
}