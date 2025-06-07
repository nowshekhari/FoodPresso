import React, { useState } from 'react'
import { Card, CardContent, 

 CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const mockDeals = [
  { id: 1, name: 'Family Pizza Deal', restaurant: 'Domino\'s', price: 19.99, originalPrice: 29.99 },
  { id: 2, name: 'Burger Combo', restaurant: 'Wendy\'s', price: 7.99, originalPrice: 10.99 },
  { id: 3, name: 'Sushi Set', restaurant: 'Sakura', price: 24.99, originalPrice: 34.99 },
  { id: 4, name: 'Taco Tuesday Special', restaurant: 'Taco Bell', price: 5.99, originalPrice: 8.99 },
  { id: 5, name: 'Pasta for Two', restaurant: 'Olive Garden', price: 15.99, originalPrice: 22.99 },
  { id: 6, name: 'Breakfast Bundle', restaurant: 'IHOP', price: 12.99, originalPrice: 18.99 },
  { id: 7, name: 'Chicken Bucket Deal', restaurant: 'KFC', price: 21.99, originalPrice: 29.99 },
  { id: 8, name: 'Sandwich Meal', restaurant: 'Subway', price: 6.99, originalPrice: 9.99 },
  { id: 9, name: 'Steak Dinner for Two', restaurant: 'Outback', price: 29.99, originalPrice: 39.99 },
  { id: 10, name: 'Burrito Box', restaurant: 'Chipotle', price: 8.99, originalPrice: 12.99 },
  { id: 11, name: 'Seafood Platter', restaurant: 'Red Lobster', price: 27.99, originalPrice: 37.99 },
  { id: 12, name: 'Veggie Delight', restaurant: 'Sweetgreen', price: 9.99, originalPrice: 14.99 },
  { id: 13, name: 'BBQ Ribs Feast', restaurant: 'Famous Dave\'s', price: 23.99, originalPrice: 32.99 },
  { id: 14, name: 'Pho Special', restaurant: 'Pho King', price: 11.99, originalPrice: 16.99 },
  { id: 15, name: 'Greek Gyro Plate', restaurant: 'Olympus Cafe', price: 13.99, originalPrice: 18.99 },
  { id: 16, name: 'Indian Curry Combo', restaurant: 'Taj Mahal', price: 16.99, originalPrice: 22.99 },
  { id: 17, name: 'Dim Sum Sampler', restaurant: 'Golden Dragon', price: 18.99, originalPrice: 25.99 },
  { id: 18, name: 'Falafel Wrap Meal', restaurant: 'Aladdin\'s', price: 10.99, originalPrice: 15.99 },
  { id: 19, name: 'Ramen Bowl Set', restaurant: 'Slurp Noodle Bar', price: 14.99, originalPrice: 19.99 }
]

export function BudgetFriendly({ onCheckout }) {
  const [budget, setBudget] = useState(20)
  const [filteredDeals, setFilteredDeals] = useState(mockDeals)

  const handleBudgetChange = (newBudget) => {
    setBudget(newBudget)
    setFilteredDeals(mockDeals.filter(deal => deal.price <= newBudget))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 p-4 bg-orange-200 text-orange-800 rounded-lg flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Budget-Friendly Ordering
      </h2>
      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle className="text-orange-600">Set Your Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Slider
              value={[budget]}
              onValueChange={(value) => handleBudgetChange(value[0])}
              max={50}
              step={1}
              className="text-orange-500"
            />
            <div className="flex justify-between text-orange-700">
              <span>$0</span>
              <span>${budget}</span>
              <span>$50</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="bg-white">
            <CardHeader>
              <CardTitle className="text-orange-600">{deal.name}</CardTitle>
              <CardDescription>{deal.restaurant}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">${deal.price.toFixed(2)}</span>
                <span className="text-sm line-through text-muted-foreground">${deal.originalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600" onClick={() => onCheckout(deal)}>
                Order Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}