import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  { id: "haircut", name: "Premium Haircut", price: "₹399", duration: "45 min" },
  { id: "beard", name: "Beard Trim & Styling", price: "₹199", duration: "30 min" },
  { id: "coloring", name: "Hair Coloring", price: "₹799", duration: "90 min" },
  { id: "facial", name: "Facial & Spa", price: "₹599", duration: "60 min" },
  { id: "kids", name: "Kids Haircut", price: "₹299", duration: "30 min" },
  { id: "treatment", name: "Hair Treatment", price: "₹499", duration: "60 min" },
];

const barbers = [
  { id: "raj", name: "Raj Kumar" },
  { id: "amit", name: "Amit Sharma" },
  { id: "vikram", name: "Vikram Singh" },
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM"
];

// Simulated slot availability (in real app, this would come from backend)
const getSlotAvailability = (date: Date | undefined, slot: string) => {
  if (!date) return "available";
  // Random availability for demo
  const random = Math.random();
  if (random > 0.7) return "booked";
  if (random > 0.4) return "available";
  return "limited";
};

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleBooking = () => {
    if (!selectedDate || !selectedSlot || !selectedService || !selectedBarber || !customerName || !customerPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment is scheduled for ${selectedDate.toLocaleDateString()} at ${selectedSlot}`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedSlot("");
    setSelectedService("");
    setSelectedBarber("");
    setCustomerName("");
    setCustomerPhone("");
  };

  const selectedServiceDetails = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">
            Book Your <span className="text-accent">Appointment</span>
          </h1>
          <p className="text-white/80 mt-2">Select your preferred date, time, and service</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Customer Details & Service Selection */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>Let us know who you are</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Select Service</CardTitle>
                <CardDescription>Choose what you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {service.price} • {service.duration}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedServiceDetails && (
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold">{selectedServiceDetails.name}</span>
                      <span className="text-accent font-bold">{selectedServiceDetails.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{selectedServiceDetails.duration}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Choose Barber</CardTitle>
                <CardDescription>Select your preferred stylist</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedBarber} onValueChange={setSelectedBarber}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any available barber" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Available Barber</SelectItem>
                    {barbers.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id}>
                        {barber.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Calendar */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Choose your appointment date</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className={cn("rounded-md border pointer-events-auto")}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Time Slots */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Available Time Slots</CardTitle>
                <CardDescription>
                  {selectedDate
                    ? `Slots for ${selectedDate.toLocaleDateString()}`
                    : "Select a date first"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedDate ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Clock size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Please select a date to view available time slots</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Legend */}
                    <div className="flex gap-4 text-xs pb-4 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span>Limited</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span>Booked</span>
                      </div>
                    </div>

                    {/* Time Slots Grid */}
                    <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                      {timeSlots.map((slot) => {
                        const availability = getSlotAvailability(selectedDate, slot);
                        const isBooked = availability === "booked";
                        const isSelected = selectedSlot === slot;

                        return (
                          <button
                            key={slot}
                            onClick={() => !isBooked && setSelectedSlot(slot)}
                            disabled={isBooked}
                            className={cn(
                              "relative p-3 rounded-lg border-2 transition-all duration-200",
                              "flex flex-col items-center justify-center gap-1",
                              isBooked && "opacity-50 cursor-not-allowed bg-muted",
                              !isBooked && "hover:border-accent hover:shadow-md cursor-pointer",
                              isSelected && "border-accent bg-accent/10 shadow-md",
                              !isSelected && !isBooked && "border-border"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm">{slot}</span>
                              {isBooked && <XCircle size={14} className="text-destructive" />}
                              {isSelected && <CheckCircle2 size={14} className="text-accent" />}
                            </div>
                            <div
                              className={cn(
                                "w-2 h-2 rounded-full",
                                availability === "available" && "bg-green-500",
                                availability === "limited" && "bg-yellow-500",
                                availability === "booked" && "bg-red-500"
                              )}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Summary & Confirm Button */}
        <div className="max-w-7xl mx-auto mt-8">
          <Card className="border-accent/50 bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Booking Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <p className="font-semibold">
                        {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Time:</span>
                      <p className="font-semibold">{selectedSlot || "Not selected"}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Service:</span>
                      <p className="font-semibold">
                        {selectedServiceDetails?.name || "Not selected"}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <p className="font-semibold text-accent">
                        {selectedServiceDetails?.price || "-"}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleBooking}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 w-full md:w-auto"
                >
                  Confirm Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
