"use client";
import { useState, useEffect, useRef } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/app/dashboard/layout";

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const { darkMode } = useTheme();
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const parseSelectedDate = () => {
    if (!selectedDate) return new Date();
    
    const [datePart, timePart] = selectedDate.split(" ");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart ? timePart.split(":") : ["00", "00"];
    
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  };

  const selectedDateObj = parseSelectedDate();

  useEffect(() => {
    setCurrentMonth(parseSelectedDate());
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current && 
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedDate]);

  const formatDateForDisplay = (date: Date): string => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleDateClick = (date: Date) => {
    date.setHours(selectedDateObj.getHours());
    date.setMinutes(selectedDateObj.getMinutes());
    
    onDateChange(formatDateForDisplay(date));
    setShowCalendar(false);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-8 w-8"></div>
      );
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isSelected = 
        selectedDateObj.getDate() === i && 
        selectedDateObj.getMonth() === month && 
        selectedDateObj.getFullYear() === year;
      
      days.push(
        <div 
          key={`day-${i}`}
          onClick={() => handleDateClick(currentDate)}
          className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer
            ${isSelected 
              ? "bg-blue-600 text-white" 
              : darkMode 
                ? "text-gray-200 hover:bg-gray-700" 
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="relative w-full md:w-72">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={selectedDate}
          onClick={() => setShowCalendar(!showCalendar)}
          readOnly
          className={`w-full px-4 py-2 border border-gray-300 rounded-md pr-10 cursor-pointer ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
          }`}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {showCalendar && (
        <div 
          ref={calendarRef}
          className={`absolute z-10 mt-2 rounded-md shadow-lg ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
          } border border-gray-300`}
          style={{ width: "calc(100%)" }}
        >
          <div className="p-3">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={prevMonth}
                className={`p-1 rounded-full ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              <div className="font-medium">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>
              <button 
                onClick={nextMonth}
                className={`p-1 rounded-full ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-xs font-medium mb-1">
                  {day}
                </div>
              ))}
              {renderCalendarDays()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;