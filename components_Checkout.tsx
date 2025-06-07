import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Checkout({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully!')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 p-4 bg-orange-200 text-orange-800 rounded-lg flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Checkout
      </h2>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-orange-600">Order Summary</CardTitle>
          <CardDescription>
            {data.name} - ${data.price?.toFixed(2)}
            {data.scheduledTime && ` (Scheduled for ${data.scheduledTime})`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="123 Main St, City, Country" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="1234 5678 9012 3456" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
            Place Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}