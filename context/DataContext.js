import { createContext, useState } from "react";
import React from 'react'

export const DataContext = createContext();

export default function DataContextProvider(props) {

  const [data, setData] = useState(null);

const PageData = () => {
  const response = [
    {
      "id": "1",
      "image_text": " Builder 1 ",
      "title": " WixPro 72-Inch Responsive Website Builder - ",
      "description": " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "main_highlight": "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating": {
        "number": "9.8",
        "title": "Exceptional",
        "rating_image": '/public/data-img/rating1.png'
      },
      "tag": "true",
      "tag_data": {
        "tag_img": "/public/data-img/tag1.png",
        "tag_text": "Best choice"
      }
    },
    {
      "id": "2",
      "image_text": " Builder",
      "title": "SiteCraft 68-Inch Ultimate Web Design Studio - ",
      "description": " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White) 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "main_highlight": "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating": {
        "number": "9.5",
        "title": "Excellent",
        "rating-image": "/public/data-img/rating2"
      },
      "tag": "true",
      "tag_data": {
        "tag_img": "/public/data-img/tag2.png",
        "tag_text": "Best value"
      }
    },
    {
      "id": "3",
      "image_text": " Builder1",
      "title": "  SiteCraft 68-Inch Ultimate Web Design Studio -",
      "description": " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White) 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      "main_highlight": "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      "rating": {
        "number": "9.3",
        "title": "Exceptional",
        "rating_image": "/public/data-img/rating1"
      },
      "tag": "false",
      "tag_data": {
        "tag_img": "/public/data-img/tag2.png",
        "tag_text": "Best value"
      }
    }

  ]

  setData(response);
}

  return (
    <DataContext.Provider value={{
      PageData,
      data
    }}>
      {props.children}
    </DataContext.Provider>
  )
}
