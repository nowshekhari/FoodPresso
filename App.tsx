import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AggregatedOrdering } from './components/AggregatedOrdering'
import { SelfPickup } from './components/SelfPickup'
import { ScheduledOrders } from './components/ScheduledOrders'
import { BudgetFriendly } from './components/BudgetFriendly'
import { Checkout } from './components/Checkout'
import { PickupConfirmation } from './components/PickupConfirmation'
import { About } from './components/About'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState("aggregated")
  const [checkoutData, setCheckoutData] = useState(null)
  const [pickupConfirmation, setPickupConfirmation] = useState(null)

  const handleCheckout = (data) => {
    setCheckoutData(data)
    setActiveTab("checkout")
  }

  const handlePickupConfirmation = (data) => {
    setPickupConfirmation(data)
    setActiveTab("pickupConfirmation")
  }

  const handleBack = () => {
    if (activeTab === "checkout" || activeTab === "pickupConfirmation" || activeTab === "about") {
      setActiveTab("aggregated")
    } else {
      setActiveTab("aggregated")
    }
    setCheckoutData(null)
    setPickupConfirmation(null)
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 
            className="text-3xl font-bold text-orange-600 cursor-pointer" 
            onClick={() => setActiveTab("about")}
          >
            Foodpresso
          </h1>
          {activeTab !== "aggregated" && (
            <Button variant="ghost" onClick={handleBack} className="text-orange-600">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          )}
        </header>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-orange-100">
            <TabsTrigger value="aggregated" className="data-[state=active]:bg-orange-200 data-[state=active]:text-orange-800">Aggregated Ordering</TabsTrigger>
            <TabsTrigger value="selfpickup" className="data-[state=active]:bg-orange-200 data-[state=active]:text-orange-800">Self Pickup</TabsTrigger>
            <TabsTrigger value="scheduled" className="data-[state=active]:bg-orange-200 data-[state=active]:text-orange-800">Scheduled Orders</TabsTrigger>
            <TabsTrigger value="budget" className="data-[state=active]:bg-orange-200 data-[state=active]:text-orange-800">Budget Friendly</TabsTrigger>
          </TabsList>
          <TabsContent value="aggregated">
            <AggregatedOrdering onCheckout={handleCheckout} />
          </TabsContent>
          <TabsContent value="selfpickup">
            <SelfPickup onPickupConfirmation={handlePickupConfirmation} />
          </TabsContent>
          <TabsContent value="scheduled">
            <ScheduledOrders onCheckout={handleCheckout} />
          </TabsContent>
          <TabsContent value="budget">
            <BudgetFriendly onCheckout={handleCheckout} />
          </TabsContent>
          <TabsContent value="checkout">
            <Checkout data={checkoutData} />
          </TabsContent>
          <TabsContent value="pickupConfirmation">
            <PickupConfirmation data={pickupConfirmation} />
          </TabsContent>
          <TabsContent value="about">
            <About />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}