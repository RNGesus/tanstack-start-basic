import { powerServerFn } from '@app/integrations/energyCharts/power.serverFn'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense, use } from 'react'

export const Route = createFileRoute('/_shell/energyCharts/$country')({
  component: RouteComponent,
  loader: async ({ params }) => ({
    promisedPowerData: powerServerFn({ data: { country: params.country } }),
  }),
})

function RouteComponent() {
  const { promisedPowerData } = Route.useLoaderData()
  const powerData = use(promisedPowerData)

  return (
    <Suspense fallback={<div>Loading power data...</div>}>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-cols">
          <thead>
            <tr>
              <th rowSpan={2}>
                Production Type
              </th>
              <th colSpan={powerData.unix_seconds?.length}>
                Data Point at
              </th>
            </tr>
            <tr>
              <th>Production Type</th>
              {powerData.unix_seconds?.map(unixSecondsEntry => (
                <th key={unixSecondsEntry}>
                  {new Date(unixSecondsEntry * 1000).toLocaleString(
                    'en-GB',
                    {
                      timeStyle: 'short',
                      timeZone: 'Europe/Berlin',
                    },
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {powerData.production_types?.map(productionType => (
              <tr key={productionType.name}>
                <th>{productionType.name}</th>
                {productionType.data?.map((data, index) => (
                  // eslint-disable-next-line react/no-array-index-key -- there is nothing else to use as a key
                  <td key={index}>{data ?? 'no data'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  )
}
