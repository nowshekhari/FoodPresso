import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from 'lucide-react'

const mockData = [
  { id: 1, name: 'Pizza Hut', address: '123 Main St', distance: '0.5 miles' },
  { id: 2, name: 'Subway', address: '456 Elm St', distance: '0.8 miles' },
  { id: 3, name: 'McDonald\'s', address: '789 Oak St', distance: '1.2 miles' },
  { id: 4, name: 'Burger King', address: '321 Pine St', distance: '1.5 miles' },
  { id: 5, name: 'Taco Bell', address: '654 Maple Ave', distance: '0.7 miles' },
  { id: 6, name: 'KFC', address: '987 Cedar Rd', distance: '1.0 miles' },
  { id: 7, name: 'Domino\'s', address: '147 Birch Ln', distance: '0.9 miles' },
  { id: 8, name: 'Wendy\'s', address: '258 Walnut Dr', distance: '1.3 miles' },
  { id: 9, name: 'Chipotle', address: '369 Spruce Ct', distance: '1.1 miles' },
]

export function SelfPickup({ onPickupConfirmation }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  const handlePickup = (restaurant) => {
    setSelectedRestaurant(restaurant)
    onPickupConfirmation(restaurant)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 p-4 bg-orange-200 text-orange-800 rounded-lg flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Self Pickup
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockData.map((restaurant) => (
          <Card key={restaurant.id} className="bg-white">
            <CardHeader>
              <CardTitle className="text-orange-600">{restaurant.name}</CardTitle>
              <CardDescription>{restaurant.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                <span>{restaurant.distance}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => window.open(`https://maps.google.com?q=${restaurant.address}`)} className="text-orange-600 border-orange-600 hover:bg-orange-100">
                <Navigation className="w-4 h-4 mr-2" />
                Navigate
              </Button>
              <Button onClick={() => handlePickup(restaurant)} className="bg-orange-500 text-white hover:bg-orange-600">I'm Here</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}