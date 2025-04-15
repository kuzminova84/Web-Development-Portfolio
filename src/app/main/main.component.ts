import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../menu-item';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  breakfast: MenuItem[] = [];
  lunch: MenuItem[] = [];
  dinner: MenuItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/breakfast.json').subscribe(data => {
      this.breakfast = data;
    });
  
    this.http.get<any[]>('assets/lunch.json').subscribe(data => {
      this.lunch = data;
    });
  
    this.http.get<any[]>('assets/dinner.json').subscribe(data => {
      this.dinner = data;
    });
  }

  // Method to return an emoji based on the item name
  getEmoji(itemName: string): string {
    const emojis: { [key: string]: string } = {
      "Pancakes": "🥞",
      "Omelette": "🍳",
      "Bagel with Cream Cheese": "🥯",
      "Grilled Salmon": "🐟",
      "Beef Steak": "🥩",
      "Pasta Primavera": "🍝",
      "Chicken Caesar Salad": "🥗",
      "Turkey Sandwich": "🥪",
      "Vegetable Soup": "🍜"
    };
  
    return emojis[itemName] || "🍴"; // Default emoji for unknown items
  }
  
}
