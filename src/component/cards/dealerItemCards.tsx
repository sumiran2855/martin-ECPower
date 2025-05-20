"use client";
import React, { useState, useEffect } from "react";
import { FaHandshake } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { useTheme } from "@/app/dashboard/layout"; 
import { DealerItemChildProps, DealerItemProps } from "../dashboard/Home/type";
import { getCustomer } from "@/controller/dealer-controller";
import { getAuthTokens } from "@/helper/authHelper";

const DealerItem: React.FC<DealerItemProps> = ({ 
  name, 
  isDealer = false, 
  children = [], 
  dealerId,
  customerId 
}) => {
  const { darkMode } = useTheme();
  const { token, idToken } = getAuthTokens();
  const [isExpanded, setIsExpanded] = useState(false);
  const [childrenItems, setChildrenItems] = useState<DealerItemChildProps[]>(children);
  const [isLoading, setIsLoading] = useState(false);
  
  const customerIds = customerId
    ? (typeof customerId === 'string'
        ? customerId.split(',')
        : [customerId]
      )
        .map(id => id.trim())
        .filter(id => id && id !== "-") 
    : [];

  
  const hasChildren = customerIds.length > 0;

  const fetchCustomerDetails = async (id: string) => {
    try {
      const data = await getCustomer(id, token, idToken);
      console.log("🚀 ~ fetchCustomerDetails ~ data:", data)
      return {
        name: data?.companyName || 'Unknown Company',
        isDealer: false, 
        id: data?.id || id
      };
    } catch (error) {
      console.error(`Failed to fetch customer details for ID ${id}:`, error);
      return null;
    }
  };

  const toggleExpand = async () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);

      if (!isExpanded && childrenItems.length === 0 && customerIds.length > 0) {
        setIsLoading(true);
        try {
          const promises = customerIds.map(id => fetchCustomerDetails(id));
          const results = await Promise.all(promises);
          
          const validResults = results.filter(result => result !== null) as DealerItemChildProps[];
          setChildrenItems(validResults);
        } catch (error) {
          console.error("Failed to fetch dealer children:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };
  
  return (
    <div className="w-full">
      <div 
        className={`flex items-center px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} rounded-md transition-colors duration-200`}
        onClick={toggleExpand}
      >
        <div className="flex items-center w-8">
          {hasChildren && (
            isExpanded ? (
              <FiMinus className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-lg`} />
            ) : (
              <FiPlus className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} text-lg`} />
            )
          )}
        </div>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
          {isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
        </div>
        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-3 truncate flex-1`}>
          {name} 
          <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            [ {hasChildren ? customerIds.length : 0} ]
          </span>
        </span>
      </div>
      
      {isExpanded && hasChildren && (
        <div className={`pl-8 ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
          {isLoading ? (
            <div className="flex justify-center items-center py-3">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            </div>
          ) : childrenItems.length > 0 ? (
            childrenItems.map((child, index) => (
              <div 
                key={index}
                className={`flex items-center px-4 py-3 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} rounded-md transition-colors duration-200`}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                  {child.isDealer ? <FaHandshake className="text-base" /> : <HiUserCircle className="text-base" />}
                </div>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} ml-3 truncate flex-1`}>{child.name}</span>
              </div>
            ))
          ) : (
            <div className="py-3 px-4 text-center text-gray-500 dark:text-gray-400">
              No children found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DealerItem;