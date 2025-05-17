import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ImpactDashboardLoading() {
  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Skeleton className="h-10 w-[250px]" />
            <Skeleton className="h-4 w-[350px] mt-2" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-[120px]" />
            <Skeleton className="h-9 w-[120px]" />
          </div>
        </div>

        {/* User Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex items-center gap-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div>
                  <Skeleton className="h-8 w-[150px]" />
                  <Skeleton className="h-4 w-[100px] mt-1" />
                  <div className="flex items-center gap-2 mt-1">
                    <Skeleton className="h-5 w-[60px]" />
                    <Skeleton className="h-5 w-[80px]" />
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[60px]" />
                  </div>
                  <Skeleton className="h-2 w-full" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="w-16 h-16 rounded-lg" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-8 w-[80px] mt-2" />
                    <Skeleton className="h-3 w-[150px] mt-2" />
                  </div>
                  <Skeleton className="h-12 w-12 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="col-span-2">
            <CardHeader>
              <Skeleton className="h-6 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <Skeleton className="h-6 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[400px] w-full rounded-md" />
            </CardContent>
          </Card>
        </div>

        {/* Projects and Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-[150px]" />
                <Skeleton className="h-4 w-[250px]" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <Skeleton className="h-5 w-[180px]" />
                          <Skeleton className="h-4 w-[250px] mt-1" />
                        </div>
                        <Skeleton className="h-5 w-[80px]" />
                      </div>
                      <Skeleton className="h-2 w-full mt-4" />
                      <div className="flex justify-between mt-4">
                        <Skeleton className="h-8 w-[100px]" />
                        <Skeleton className="h-4 w-[120px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
