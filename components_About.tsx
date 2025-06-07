import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 p-4 bg-orange-200 text-orange-800 rounded-lg flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        About Foodpresso
      </h2>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-600">Welcome to Foodpresso</CardTitle>
          <CardDescription>Your one-stop solution for all your food ordering needs</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Foodpresso was founded and developed by <span className="font-semibold">Abhishek Hari</span> with the vision of revolutionizing the food ordering experience. Our platform aggregates multiple food delivery services, offering users a comprehensive and convenient way to order their favorite meals.
          </p>
          <p className="mb-4">
            We understand that modern life can be hectic, which is why we've designed Foodpresso to cater to various needs:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Aggregated ordering from multiple platforms</li>
            <li>Self-pickup options for those who prefer to grab and go</li>
            <li>Scheduled orders for busy professionals</li>
            <li>Budget-friendly deals for the cost-conscious foodies</li>
          </ul>
          <p>
            At Foodpresso, we're committed to making your food ordering experience as smooth and enjoyable as possible. Whether you're looking for the best deals, fastest delivery, or simply exploring new culinary options, we've got you covered.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}