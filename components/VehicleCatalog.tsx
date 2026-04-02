'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Fuel,
  Settings2,
  MapPin,
  Calendar,
  ChevronDown,
  LayoutGrid,
  List,
  Search,
  FilterX
} from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const VEHICLE_TYPES = ['Any', 'Sedan', 'Electro', 'SUV', 'Sport', 'Minivan'];

const SORT_OPTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest First' }
];

const CARS = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    fuel: '60 L',
    transmission: 'Auto',
    price: 220,
    isNew: false,
    dateAdded: '2025-01-01'
  },
  {
    id: 2,
    name: 'Tesla Model 3',
    type: 'Electro',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    fuel: 'Electric',
    transmission: 'Auto',
    price: 250,
    isNew: true,
    dateAdded: '2025-03-20'
  },
  {
    id: 3,
    name: 'Mercedes Benz S-Class',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    fuel: '70 L',
    transmission: 'Auto',
    price: 300,
    isNew: false,
    dateAdded: '2024-12-15'
  },
  {
    id: 4,
    name: 'BMW M4 Competition',
    type: 'Sport',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    fuel: '60 L',
    transmission: 'Auto',
    price: 280,
    isNew: false,
    dateAdded: '2025-02-10'
  },
  {
    id: 5,
    name: 'Audi RS5 Coupé',
    type: 'Sport',
    image: '/images/audi-rs5.jpg',
    passengers: 4,
    fuel: '60 L',
    transmission: 'Auto',
    price: 290,
    isNew: true,
    dateAdded: '2025-03-25'
  },
  {
    id: 6,
    name: 'Range Rover Sport',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=800&auto=format&fit=crop',
    passengers: 5,
    fuel: '80 L',
    transmission: 'Auto',
    price: 350,
    isNew: false,
    dateAdded: '2025-01-15'
  },
  {
    id: 7,
    name: 'Porsche Cayenne',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    passengers: 5,
    fuel: '75 L',
    transmission: 'Auto',
    price: 380,
    isNew: true,
    dateAdded: '2025-03-28'
  },
  {
    id: 8,
    name: 'Lucid Air',
    type: 'Electro',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    fuel: 'Electric',
    transmission: 'Auto',
    price: 420,
    isNew: true,
    dateAdded: '2025-03-30'
  },
  {
    id: 9,
    name: 'Honda Odyssey',
    type: 'Minivan',
    image: '/images/hondao.jpg',
    passengers: 7,
    fuel: '65 L',
    transmission: 'Auto',
    price: 180,
    isNew: false,
    dateAdded: '2024-11-20'
  }
];

export default function VehicleCatalog() {
  const [selectedType, setSelectedType] = useState('Any');
  const [sortBy, setSortBy] = useState('default');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredAndSortedCars = useMemo(() => {
    let result = [...CARS];

    // Filter
    if (selectedType !== 'Any') {
      result = result.filter(car => car.type === selectedType);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      default:
        // Default stays as defined in array
        break;
    }

    return result;
  }, [selectedType, sortBy]);



  const currentSortLabel = SORT_OPTIONS.find(opt => opt.id === sortBy)?.label;

  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-4 md:px-16" id="cars">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2 font-display uppercase tracking-tight">Vehicle Catalog</h2>
          <p className="text-slate-500">Find your perfect ride from our premium selection.</p>
          <div className="w-12 h-1 bg-slate-200 mx-auto mt-4" />
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex items-center gap-3 px-4 py-3 border-r border-slate-50">
            <MapPin className="w-5 h-5 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">Pickup location</span>
              <input suppressHydrationWarning type="text" placeholder="Search your location" className="bg-transparent text-sm focus:outline-none placeholder:text-slate-300" />
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-r border-slate-50">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">Pickup date</span>
              <span className="text-sm text-slate-600">Thu 24 Jul, 08:00</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-r border-slate-50">
            <MapPin className="w-5 h-5 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">Return location</span>
              <input suppressHydrationWarning type="text" placeholder="Search your location" className="bg-transparent text-sm focus:outline-none placeholder:text-slate-300" />
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <Calendar className="w-5 h-5 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">Return date</span>
              <span className="text-sm text-slate-600">Mon 28 Jul, 14:00</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">Filters</h3>
                <button
                  onClick={() => {
                    setSelectedType('Any');
                    setSortBy('default');
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Reset All
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Vehicle Type</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-3">
                  {VEHICLE_TYPES.map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => setSelectedType(type)}
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedType === type
                          ? 'bg-slate-900 border-slate-900'
                          : 'border-slate-200 group-hover:border-slate-400'
                          }`}
                      >
                        {selectedType === type && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                      <span className={`text-sm transition-colors ${selectedType === type ? 'text-slate-900 font-medium' : 'text-slate-500'
                        }`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-lg p-1 border border-slate-100">
                  <button className="p-2 bg-slate-50 rounded-md text-slate-900">
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600">
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-slate-500">
                  Showing {filteredAndSortedCars.length} of {CARS.length} vehicles
                </span>
              </div>

              <div className="flex items-center gap-2 relative">
                <span className="text-sm text-slate-400">Sort by</span>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 text-sm font-medium text-slate-900 hover:border-slate-300 transition-all min-w-[160px] justify-between"
                >
                  {currentSortLabel} <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-50 overflow-hidden">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSortBy(opt.id);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-slate-50 ${sortBy === opt.id ? 'text-slate-900 font-bold bg-slate-50' : 'text-slate-500'
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-[600px] content-start">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedCars.length > 0 ? (
                  filteredAndSortedCars.map((car) => (
                    <motion.div
                      key={car.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="catalog-card bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 h-fit"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{car.name}</h3>
                          <span className="text-xs text-slate-400">{car.type}</span>
                        </div>
                        {car.isNew && (
                          <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
                        )}
                      </div>

                      <div className="relative h-40 w-full mb-6">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex items-center justify-between py-4 border-t border-slate-50 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-300" />
                          <span className="text-xs text-slate-500">{car.passengers}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4 text-slate-300" />
                          <span className="text-xs text-slate-500">{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings2 className="w-4 h-4 text-slate-300" />
                          <span className="text-xs text-slate-500">{car.transmission}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-slate-900">${car.price}</span>
                          <span className="text-xs text-slate-400 ml-1">/day</span>
                        </div>
                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
                          Book
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400"
                  >
                    <FilterX className="w-12 h-12 mb-4 opacity-20" />
                    <p>No vehicles found for this type.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
