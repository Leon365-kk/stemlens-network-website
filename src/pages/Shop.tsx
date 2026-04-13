import { useState, type SyntheticEvent } from 'react';
import { Search, ShoppingCart, Eye, Star, Filter, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: number;
  inStock: boolean;
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
  warranty?: string;
  shipping?: string;
  availability?: string;
  brand?: string;
  model?: string;
  weight?: string;
  dimensions?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  // 3D Printing & Starter Kits
  {
    id: 1,
    name: "Smart 4WD Robot Set",
    price: 6500.00,
    image: "/images/img_6751-320x320.png",
    category: "Starter Kits",
    description: "This robotic platform features a double acrylic chassis with 4 geared motors powered by an L298N motor driver for precise movement. Perfect for beginners and advanced users looking to build autonomous robots.",
    rating: 4.8,
    brand: "STEMlens Robotics",
    model: "4WD-2024",
    weight: "1.2kg",
    dimensions: "30cm x 20cm x 15cm",
    warranty: "1 Year Manufacturer Warranty",
    shipping: "Free shipping within Kenya",
    availability: "In stock - Ready to ship",
    features: [
      "Double acrylic chassis for durability",
      "4 high-torque geared DC motors",
      "L298N motor driver included",
      "Arduino-compatible controller",
      "Easy assembly with detailed instructions",
      "Perfect for autonomous navigation projects",
      "Expandable sensor mounting points"
    ],
    specifications: {
      motor_type: "Geared DC Motor",
      motor_voltage: "6-12V DC",
      chassis_material: "Acrylic",
      wheel_diameter: "65mm",
      max_payload: "500g",
      battery_required: "4x AA (not included)",
      controller: "Arduino UNO compatible",
      programming_language: "C++/Arduino IDE"
    },
    inStock: true
  },
  {
    id: 2,
    name: "3D Printer Starter Kit",
    price: 8500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/3d-printer-kit-320x320.jpg",
    category: "3D Printing",
    description: "Complete 3D printer starter kit with everything needed to start 3D printing. Includes filament, tools, and setup guide.",
    rating: 4.7,
    inStock: true
  },
  // Connectors/Wires
  {
    id: 3,
    name: "Jumper Wires Pack (Male to Male)",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/jumper-wires-320x320.jpg",
    category: "Connectors/Wires",
    description: "High-quality jumper wires pack for breadboard prototyping and circuit connections.",
    inStock: true
  },
  {
    id: 4,
    name: "Dupont Connector Set",
    price: 200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dupont-connectors-320x320.jpg",
    category: "Connectors/Wires",
    description: "Complete Dupont connector set with male and female terminals for custom wiring.",
    inStock: true
  },
  // Screws/Nuts
  {
    id: 5,
    name: "M3 x 4 Hexagon Stainless Steel Nut + M3*8 Stainless Screws",
    price: 3.00,
    image: "/images/m3-x-8-phillips-pan-head-screw-din-7985h-a2-1-22332-p-320x320.png",
    category: "Screws/Nuts",
    description: "High-quality stainless steel nuts and screws for various applications",
    inStock: true
  },
  {
    id: 6,
    name: "M3*6 Stainless Screws + Resistors + 3MM LED white",
    price: 11.00,
    image: "/images/LED3WULB.jpg",
    category: "Screws/Nuts",
    description: "Complete set with screws, resistors and white LEDs",
    inStock: true
  },
  {
    id: 29,
    name: "M3*10 Stainless Screws",
    price: 4.00,
    image: "/images/m3-x-10-phillips-pan-head-screw-din-7985h-a4-1-22460-p-320x320.png",
    category: "Screws/Nuts",
    description: "An M3*10 Stainless Steel Screw is a threaded fastener made from stainless steel with specific dimensions.",
    inStock: true
  },
  {
    id: 30,
    name: "M3*12 Stainless Screws",
    price: 5.00,
    image: "/images/m3-x-12-phillips-pan-head-screw-din-7985h-a4-1-22461-p-320x320.png",
    category: "Screws/Nuts",
    description: "An M3*12 Stainless Steel Screw is a threaded fastener made from stainless steel with specific dimensions.",
    inStock: true
  },
  // Switches/Buttons
  {
    id: 7,
    name: "2pin Tactile Button 3.6×3.5mm Side push (SMD)",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tactile-buttons-320x320.jpg",
    category: "Switches/Buttons",
    description: "SMD tactile buttons for compact circuit designs and user interfaces.",
    inStock: true
  },
  {
    id: 31,
    name: "2pin Tactile Button 3.6×3.5mm Side push (SMD)",
    price: 4.00,
    image: "/images/img_1451-320x320.jpeg",
    category: "Switches/Buttons",
    description: "Compact 2-Pin Side-Push Tactile Button This is a versatile 2-pin tactile push button designed for surface mount applications.",
    inStock: true
  },
  {
    id: 8,
    name: "Push Button Switch Set (5pcs)",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/push-buttons-320x320.jpg",
    category: "Switches/Buttons",
    description: "Set of 5 colored push button switches for project controls.",
    inStock: true
  },
  // Drone Parts
  {
    id: 9,
    name: "Drone Frame Kit (250mm)",
    price: 1200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/drone-frame-320x320.jpg",
    category: "Drone Parts",
    description: "250mm drone frame kit with carbon fiber arms and mounting hardware.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 10,
    name: "Brushless DC Motor 2204",
    price: 800.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/brushless-motor-320x320.jpg",
    category: "Drone Parts",
    description: "High-performance brushless DC motor for drone applications.",
    inStock: true
  },
  // Electronic Modules - Cameras
  {
    id: 11,
    name: "OV2640 Camera Module",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ov2640-camera-320x320.jpg",
    category: "Electronic Modules",
    description: "2MP camera module with high resolution for embedded vision projects.",
    inStock: true
  },
  {
    id: 12,
    name: "Thermal Camera Module MLX90640",
    price: 2500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/thermal-camera-320x320.jpg",
    category: "Electronic Modules",
    description: "32x24 pixel thermal camera module for temperature sensing applications.",
    rating: 4.6,
    inStock: true
  },
  // Electronic Modules - Communication
  {
    id: 13,
    name: "NRF24L01 Wireless Module",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/nrf24l01-320x320.jpg",
    category: "Electronic Modules",
    description: "2.4GHz wireless transceiver module for short-range communication.",
    inStock: true
  },
  {
    id: 14,
    name: "ESP8266 WiFi Module",
    price: 250.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/esp8266-320x320.jpg",
    category: "Electronic Modules",
    description: "WiFi module for IoT projects and wireless connectivity.",
    rating: 4.7,
    inStock: true
  },
  // Electronic Modules - Displays
  {
    id: 15,
    name: "OLED Display 0.96 inch I2C",
    price: 320.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/oled-display-320x320.jpg",
    category: "Electronic Modules",
    description: "0.96 inch OLED display with I2C interface for compact projects.",
    inStock: true
  },
  {
    id: 16,
    name: "TFT LCD Display 2.4 inch",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tft-lcd-320x320.jpg",
    category: "Electronic Modules",
    description: "2.4 inch TFT LCD display with touch screen capability.",
    rating: 4.4,
    inStock: true
  },
  // Motors, Drivers & Actuators - Stepper Motor
  {
    id: 17,
    name: "NEMA 17 Stepper Motor",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/nema17-stepper-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "NEMA 17 bipolar stepper motor for precision positioning applications.",
    inStock: true
  },
  {
    id: 18,
    name: "A4988 Stepper Motor Driver",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/a4988-driver-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "A4988 stepper motor driver with microstepping capability.",
    inStock: true
  },
  // Power Elements - Li-Po Batteries
  {
    id: 19,
    name: "Li-Po Battery 3.7V 1000mAh",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lipo-battery-320x320.jpg",
    category: "Power Elements",
    description: "3.7V 1000mAh Li-Po battery for portable projects.",
    inStock: true
  },
  {
    id: 20,
    name: "Li-Po Battery 3.7V 2200mAh",
    price: 550.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lipo-2200mah-320x320.jpg",
    category: "Power Elements",
    description: "High capacity 3.7V 2200mAh Li-Po battery for extended runtime.",
    rating: 4.8,
    inStock: true
  },
  // Electronic Components - LEDs
  {
    id: 21,
    name: "3MM LED yellow + 3MM LED green + 3MM LED blue",
    price: 12.00,
    image: "/images/yellow-led-3mm-diffused-600x600-1-320x320.jpg",
    category: "Electronic Components",
    description: "Colorful LED set for various electronic projects",
    inStock: true
  },
  {
    id: 22,
    name: "3MM LED red + 2 Pin 5MM LED Round Light Emitting Diode (Orange) + 2 Pin 5MM LED Round Light Emitting Diode (Green)",
    price: 12.00,
    image: "/images/51J8hvPyNBL-320x320.jpg",
    category: "Electronic Components",
    description: "Mixed color LED assortment with red, orange and green variants",
    rating: 5.0,
    inStock: true
  },
  {
    id: 32,
    name: "2 Pin 5MM LED Round Light Emitting Diode (Red)",
    price: 4.00,
    image: "/images/5mm-LED-320x320.jpg",
    category: "Electronic Components",
    description: "2 Pin 5mm Round Red LED - High quality red LED for various electronic applications.",
    inStock: true
  },
  {
    id: 33,
    name: "2 Pin 5MM LED Round Light Emitting (White)",
    price: 4.00,
    image: "/images/5mm-LED-320x320.jpg",
    category: "Electronic Components",
    description: "2 Pin 5mm Round White LED - Bright white LED for lighting and indicator applications.",
    inStock: true
  },
  {
    id: 34,
    name: "2 Pin 5MM LED Round Light Emitting Diode (Blue)",
    price: 4.00,
    image: "/images/img_9539-320x320.jpeg",
    category: "Electronic Components",
    description: "2 Pin 5mm Round Blue LED - Vibrant blue LED for decorative and indicator uses.",
    inStock: true
  },
  // Electronic Components - capacitors
  {
    id: 23,
    name: "16V 100uF Capacitor",
    price: 10.00,
    image: "/images/img_6310-1-320x320.jpeg",
    category: "Electronic Components",
    description: "Capacitance – 1000 Microfarad Operating Voltage-16 Volts Maximum Voltage 16 Volts",
    inStock: true
  },
  {
    id: 24,
    name: "25V 100uF Capacitor",
    price: 10.00,
    image: "/images/img_6308-320x320.jpeg",
    category: "Electronic Components",
    description: "Rated 5.00 out of 5 Capacitance – 100 uF Voltage – 16V",
    rating: 5.0,
    inStock: true
  },
  {
    id: 35,
    name: "30 Kinds 2pF-0.1uF (100nF ) Ceramic Capacitors",
    price: 5.00,
    image: "/images/capacitors-1-320x320.jpg",
    category: "Electronic Components",
    description: "Ceramic Capacitors – Reliable, High-Frequency Performance Ceramic capacitors are compact, non-polarized passive components.",
    inStock: true
  },
  // Electronic Components - transistors
  {
    id: 25,
    name: "NPN BC337 transistor",
    price: 10.00,
    image: "/images/transistor_bc337_2509_1_f65f7acb454662eea1c035c60ba15c2b-320x320.webp",
    category: "Electronic Components",
    description: "The BC337 is a great choice for an NPN bipolar junction transistor (BJT)!",
    rating: 5.0,
    inStock: true
  },
  {
    id: 26,
    name: "JFET 2N5459 transistors",
    price: 10.00,
    image: "/images/transistor-jfet-2n5459-2N5459THT-320x320.jpg",
    category: "Electronic Components",
    description: "The 2N5459 is a JFET (Junction Field-Effect Transistor), not a bipolar junction transistor (BJT).",
    inStock: true
  },
  {
    id: 36,
    name: "NPN BC547 transistor",
    price: 5.00,
    image: "/images/100-20-pcs-bc547-high-quality-who-original-imaggvphbyxyht8k-320x320.webp",
    category: "Electronic Components",
    description: "The BC547 is a great choice! You're on the right track if you're looking for a reliable NPN transistor.",
    inStock: true
  },
  {
    id: 37,
    name: "transistors PNP 2N2222A",
    price: 5.00,
    image: "/images/sc-npn-2n2222_lrg_grobo-320x320.png",
    category: "Electronic Components",
    description: "The information you provided has a slight inaccuracy. The 2N2222A is actually an NPN bipolar transistor.",
    inStock: true
  },
  {
    id: 38,
    name: "Triode 2N3904 TO-92",
    price: 5.00,
    image: "/images/s-l1200-4-320x320.jpg",
    category: "Electronic Components",
    description: "The 2N3904 is a general-purpose NPN silicon transistor packaged in a TO-92 case.",
    inStock: true
  },
  {
    id: 39,
    name: "Triode 2N3906 0.2A/40V",
    price: 5.00,
    image: "/images/tranzistor-pnp-2n3906-320x320.jpg",
    category: "Electronic Components",
    description: "2N3906 Triode Description: The 2N3906 is a general-purpose PNP silicon transistor packaged in a TO-92 case.",
    inStock: true
  },
  // Additional Products for Other Categories
  {
    id: 40,
    name: "A03400 MOSFET",
    price: 15.00,
    image: "/images/s-l1200-320x320.jpg",
    category: "Electronic Components",
    description: "The AO3400 is a popular N-channel MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) commonly used in various electronic applications.",
    inStock: true
  },
  {
    id: 41,
    name: "555 Timer IC",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/555-timer-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Classic 555 timer IC for timing circuits, oscillators, and pulse generation.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 42,
    name: "CD4017 Decade Counter IC",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/cd4017-ic-320x320.jpg",
    category: "Electronic Components",
    description: "CMOS decade counter with 10 decoded outputs for sequential counting applications.",
    inStock: true
  },
  {
    id: 43,
    name: "AND Gate IC (7408)",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/and-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Quad 2-input AND gate IC for digital logic circuits.",
    inStock: true
  },
  {
    id: 44,
    name: "OR Gate IC (7432)",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/or-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Quad 2-input OR gate IC for digital logic operations.",
    inStock: true
  },
  {
    id: 45,
    name: "NOT Gate IC (7404)",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/not-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Hex inverter (NOT gate) IC for signal inversion in digital circuits.",
    inStock: true
  },
  // Programming Boards - Arduino boards
  {
    id: 27,
    name: "Arduino Uno R3",
    price: 1200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-uno-r3-320x320.jpg",
    category: "Programming Boards",
    description: "Original Arduino Uno R3 microcontroller board for prototyping and projects. The most popular board for electronics enthusiasts and professionals worldwide.",
    rating: 4.9,
    brand: "Arduino",
    model: "UNO R3",
    weight: "25g",
    dimensions: "6.8cm x 5.3cm x 1cm",
    warranty: "2 Year Manufacturer Warranty",
    shipping: "Express delivery available",
    availability: "In stock - Ships within 24 hours",
    features: [
      "ATmega328P microcontroller",
      "14 digital I/O pins (6 PWM outputs)",
      "6 analog input pins",
      "32KB flash memory",
      "USB programming interface",
      "Power jack and USB power options",
      "Compatible with all Arduino shields"
    ],
    specifications: {
      microcontroller: "ATmega328P",
      operating_voltage: "5V",
      input_voltage: "7-12V (recommended)",
      digital_i_o_pins: "14 (6 PWM)",
      analog_input_pins: "6",
      flash_memory: "32KB",
      sram: "2KB",
      eeprom: "1KB",
      clock_speed: "16MHz"
    },
    inStock: true
  },
  {
    id: 28,
    name: "Arduino Nano",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-nano-320x320.jpg",
    category: "Programming Boards",
    description: "Compact Arduino Nano board for small projects and breadboard prototyping.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 46,
    name: "ESP32 Dev Board",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/esp32-dev-board-320x320.jpg",
    category: "Programming Boards",
    description: "ESP32 development board with WiFi and Bluetooth for IoT projects.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 47,
    name: "Raspberry Pi 4 Model B",
    price: 3500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rpi4-model-b-320x320.jpg",
    category: "Programming Boards",
    description: "Powerful single-board computer with 4GB RAM for advanced projects.",
    rating: 4.8,
    inStock: true
  },
  // Additional Categories
  {
    id: 48,
    name: "SG90 Servo Motor",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/sg90-servo-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Small 9g servo motor perfect for robotics and automation projects.",
    inStock: true
  },
  {
    id: 49,
    name: "MG996R Servo Motor",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/mg996r-servo-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "High-torque servo motor for demanding robotics applications.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 50,
    name: "BMS 3S 30A",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/bms-3s-30a-320x320.jpg",
    category: "Power Elements",
    description: "3S 30A Battery Management System for Li-Po battery protection.",
    inStock: true
  },
  {
    id: 51,
    name: "DC-DC Buck Converter 5V 3A",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/buck-converter-320x320.jpg",
    category: "Power Elements",
    description: "Step-down voltage converter for power regulation in electronic circuits.",
    inStock: true
  },
  {
    id: 52,
    name: "5V 2A Power Adapter",
    price: 250.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/power-adapter-320x320.jpg",
    category: "Power Elements",
    description: "Reliable 5V 2A power adapter for Arduino and other microcontroller projects.",
    inStock: true
  },
  {
    id: 53,
    name: "Robot Wheel 65mm",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/robot-wheel-320x320.jpg",
    category: "Robotics",
    description: "65mm diameter rubber wheel with mounting hub for robot projects.",
    inStock: true
  },
  {
    id: 54,
    name: "Flexible Shaft Coupling 5x5mm",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/shaft-coupling-320x320.jpg",
    category: "Robotics",
    description: "Flexible shaft coupling for connecting motor shafts to other components.",
    inStock: true
  },
  // Motors, Drivers & Actuators - Motor
  {
    id: 55,
    name: "DC Motor 12V 100RPM",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dc-motor-12v-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "12V DC gear motor with 100RPM output for robotics and automation projects.",
    inStock: true
  },
  {
    id: 56,
    name: "DC Motor 6V 200RPM",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dc-motor-6v-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Compact 6V DC motor with 200RPM for small robot projects.",
    rating: 4.3,
    inStock: true
  },
  // Motors, Drivers & Actuators - Motor drivers
  {
    id: 57,
    name: "L298N Motor Driver Module",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/l298n-driver-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Dual H-bridge motor driver module for controlling DC motors and steppers.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 58,
    name: "DRV8825 Stepper Driver",
    price: 220.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/drv8825-driver-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Advanced stepper motor driver with microstepping up to 1/32 step.",
    inStock: true
  },
  // Motors, Drivers & Actuators - Attachments
  {
    id: 59,
    name: "Motor Mount Bracket",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/motor-mount-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Universal motor mounting bracket for various motor sizes.",
    inStock: true
  },
  {
    id: 60,
    name: "Wheel Hub Adapter",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/wheel-hub-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Adapter for connecting wheels to motor shafts.",
    inStock: true
  },
  // Power Elements - BMS
  {
    id: 61,
    name: "BMS 4S 40A",
    price: 650.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/bms-4s-40a-320x320.jpg",
    category: "Power Elements",
    description: "4S 40A Battery Management System for larger Li-Po battery packs.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 62,
    name: "BMS 6S 30A",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/bms-6s-30a-320x320.jpg",
    category: "Power Elements",
    description: "6S 30A BMS for high-voltage battery protection and management.",
    inStock: true
  },
  // Power Elements - Battery
  {
    id: 63,
    name: "18650 Li-ion Battery 3000mAh",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/18650-battery-320x320.jpg",
    category: "Power Elements",
    description: "High-quality 18650 Li-ion battery with 3000mAh capacity.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 64,
    name: "18650 Li-ion Battery 3500mAh",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/18650-3500mah-320x320.jpg",
    category: "Power Elements",
    description: "Premium 18650 battery with 3500mAh capacity for extended runtime.",
    inStock: true
  },
  // Power Elements - Li-ion Batteries
  {
    id: 65,
    name: "18650 Battery Holder 2S",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/battery-holder-2s-320x320.jpg",
    category: "Power Elements",
    description: "2S 18650 battery holder with connecting leads.",
    inStock: true
  },
  {
    id: 66,
    name: "18650 Battery Holder 3S",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/battery-holder-3s-320x320.jpg",
    category: "Power Elements",
    description: "3S 18650 battery holder for series connection.",
    inStock: true
  },
  // Power Elements - Relays
  {
    id: 67,
    name: "5V Relay Module 2 Channel",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/relay-module-2ch-320x320.jpg",
    category: "Power Elements",
    description: "2-channel 5V relay module for switching high voltage loads.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 68,
    name: "12V Relay Module 4 Channel",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/relay-module-4ch-320x320.jpg",
    category: "Power Elements",
    description: "4-channel 12V relay module for multiple load control.",
    inStock: true
  },
  // Project parts - Accessories
  {
    id: 69,
    name: "Breadboard 830 Points",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/breadboard-830-320x320.jpg",
    category: "Project parts",
    description: "Standard 830-point solderless breadboard for prototyping.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 70,
    name: "Jumper Wire Set (120pcs)",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/jumper-set-120pcs-320x320.jpg",
    category: "Project parts",
    description: "Complete jumper wire set with various lengths and colors.",
    inStock: true
  },
  // Project parts - Pumps/Valves
  {
    id: 71,
    name: "Mini Water Pump 3-6V",
    price: 250.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/water-pump-320x320.jpg",
    category: "Project parts",
    description: "Small DC water pump for irrigation and cooling systems.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 72,
    name: "Solenoid Valve 12V",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/solenoid-valve-320x320.jpg",
    category: "Project parts",
    description: "12V solenoid valve for automated fluid control systems.",
    inStock: true
  },
  // Robotics - Additional Products
  {
    id: 73,
    name: "Robot Chassis Kit 2WD",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/robot-chassis-2wd-320x320.jpg",
    category: "Robotics",
    description: "2-wheel drive robot chassis with motor mounts.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 74,
    name: "Robot Chassis Kit 4WD",
    price: 650.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/robot-chassis-4wd-320x320.jpg",
    category: "Robotics",
    description: "4-wheel drive robot chassis for all-terrain robots.",
    inStock: true
  },
  // Electronic Components - General
  {
    id: 75,
    name: "Resistor Kit 1/4W (560pcs)",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/resistor-kit-560pcs-320x320.jpg",
    category: "Electronic Components",
    description: "Complete resistor kit with 86 values from 10Ω to 1MΩ.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 76,
    name: "Capacitor Kit Assorted (100pcs)",
    price: 220.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/capacitor-kit-100pcs-320x320.jpg",
    category: "Electronic Components",
    description: "Assorted capacitor kit with various values and types.",
    inStock: true
  },
  {
    id: 77,
    name: "Diode Assortment Kit (200pcs)",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/diode-kit-200pcs-320x320.jpg",
    category: "Electronic Components",
    description: "Complete diode assortment including rectifier, zener, and signal diodes.",
    inStock: true
  },
  // Logic Gates - Additional Products
  {
    id: 78,
    name: "XOR Gate IC (7486)",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/xor-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Quad 2-input XOR gate IC for digital logic operations.",
    inStock: true
  },
  {
    id: 79,
    name: "NAND Gate IC (7400)",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/nand-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Quad 2-input NAND gate IC - universal logic gate.",
    rating: 4.2,
    inStock: true
  },
  {
    id: 80,
    name: "NOR Gate IC (7402)",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/nor-gate-ic-320x320.jpg",
    category: "Electronic Components",
    description: "Quad 2-input NOR gate IC for digital logic circuits.",
    inStock: true
  },
  // passive components
  {
    id: 81,
    name: "Ceramic Resonator 8MHz",
    price: 15.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ceramic-resonator-8mhz-320x320.jpg",
    category: "Electronic Components",
    description: "8MHz ceramic resonator for microcontroller clock circuits.",
    inStock: true
  },
  {
    id: 82,
    name: "Crystal Oscillator 16MHz",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/crystal-16mhz-320x320.jpg",
    category: "Electronic Components",
    description: "16MHz crystal oscillator for precise timing applications.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 83,
    name: "Inductor Kit 10 Values",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/inductor-kit-320x320.jpg",
    category: "Electronic Components",
    description: "Inductor assortment kit with values from 1μH to 100μH.",
    inStock: true
  },
  // Integrated Circuits - Additional Products
  {
    id: 84,
    name: "LM358 Op-Amp IC",
    price: 15.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lm358-opamp-320x320.jpg",
    category: "Electronic Components",
    description: "Dual operational amplifier for analog signal processing.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 85,
    name: "LM741 Op-Amp IC",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lm741-opamp-320x320.jpg",
    category: "Electronic Components",
    description: "Classic single operational amplifier for analog circuits.",
    inStock: true
  },
  {
    id: 86,
    name: "NE555 Precision Timer",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ne555-timer-320x320.jpg",
    category: "Electronic Components",
    description: "Precision version of the classic 555 timer IC.",
    inStock: true
  },
  {
    id: 87,
    name: "LM317 Voltage Regulator",
    price: 18.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lm317-regulator-320x320.jpg",
    category: "Electronic Components",
    description: "Adjustable positive voltage regulator 1.2V to 37V.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 88,
    name: "ULN2003 Darlington Array",
    price: 20.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/uln2003-darlington-320x320.jpg",
    category: "Electronic Components",
    description: "7-channel Darlington transistor array for high-current driving.",
    inStock: true
  },
  // Mosfets - Additional Products
  {
    id: 89,
    name: "IRF540N N-Channel MOSFET",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/irf540n-mosfet-320x320.jpg",
    category: "Electronic Components",
    description: "100V N-channel MOSFET for high-power switching applications.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 90,
    name: "IRF9540 P-Channel MOSFET",
    price: 28.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/irf9540-mosfet-320x320.jpg",
    category: "Electronic Components",
    description: "100V P-channel MOSFET complementary to IRF540N.",
    inStock: true
  },
  {
    id: 91,
    name: "2N7000 N-Channel MOSFET",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/2n7000-mosfet-320x320.jpg",
    category: "Electronic Components",
    description: "60V N-channel MOSFET for low-power switching applications.",
    inStock: true
  },
  {
    id: 92,
    name: "BS170 N-Channel MOSFET",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/bs170-mosfet-320x320.jpg",
    category: "Electronic Components",
    description: "60V N-channel MOSFET for general purpose switching.",
    rating: 4.3,
    inStock: true
  },
  // Additional Products for Electronic Modules - Interface modules
  {
    id: 93,
    name: "USB to TTL Converter Module",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/usb-ttl-converter-320x320.jpg",
    category: "Electronic Modules",
    description: "USB to TTL serial converter for programming microcontrollers.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 94,
    name: "I2C LCD Module 20x4",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/i2c-lcd-20x4-320x320.jpg",
    category: "Electronic Modules",
    description: "20x4 character LCD display with I2C interface for easy connection.",
    inStock: true
  },
  // Electronic Modules - More modules
  {
    id: 95,
    name: "PIR Motion Sensor Module",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/pir-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Passive infrared motion sensor for security and automation projects.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 96,
    name: "Ultrasonic Sensor HC-SR04",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ultrasonic-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Ultrasonic distance sensor for measuring distance and object detection.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 97,
    name: "DHT11 Temperature & Humidity Sensor",
    price: 100.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dht11-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Digital temperature and humidity sensor for environmental monitoring.",
    inStock: true
  },
  {
    id: 98,
    name: "DHT22 Temperature & Humidity Sensor",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dht22-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "High-precision digital temperature and humidity sensor.",
    rating: 4.7,
    inStock: true
  },
  // Electronic Modules - Navigation/Antennas
  {
    id: 99,
    name: "GPS Module NEO-6M",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/gps-module-320x320.jpg",
    category: "Electronic Modules",
    description: "GPS module for location tracking and navigation projects.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 100,
    name: "WiFi Antenna 2.4GHz 5dBi",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/wifi-antenna-320x320.jpg",
    category: "Electronic Modules",
    description: "2.4GHz WiFi antenna for improved wireless signal strength.",
    inStock: true
  },
  // Electronic Modules - Serial Elements
  {
    id: 101,
    name: "RS485 to TTL Converter",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rs485-converter-320x320.jpg",
    category: "Electronic Modules",
    description: "RS485 to TTL converter for industrial communication protocols.",
    inStock: true
  },
  {
    id: 102,
    name: "CAN Bus Module MCP2515",
    price: 220.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/can-bus-module-320x320.jpg",
    category: "Electronic Modules",
    description: "CAN bus controller module for automotive and industrial applications.",
    rating: 4.3,
    inStock: true
  },
  // Additional Drone Parts
  {
    id: 103,
    name: "ESC Brushless 30A",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/esc-30a-320x320.jpg",
    category: "Drone Parts",
    description: "30A electronic speed controller for brushless drone motors.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 104,
    name: "Drone Propeller Set 10inch",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/propeller-set-320x320.jpg",
    category: "Drone Parts",
    description: "Set of 2 drone propellers (1 CW, 1 CCW) for quadcopters.",
    inStock: true
  },
  {
    id: 105,
    name: "Flight Controller Pixhawk",
    price: 2500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/flight-controller-320x320.jpg",
    category: "Drone Parts",
    description: "Advanced flight controller for autonomous drone navigation.",
    rating: 4.8,
    inStock: true
  },
  // More Connectors/Wires
  {
    id: 106,
    name: "Breadboard Jumper Wires (140pcs)",
    price: 100.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/breadboard-jumpers-320x320.jpg",
    category: "Connectors/Wires",
    description: "Color-coded breadboard jumper wires in various lengths.",
    inStock: true
  },
  {
    id: 107,
    name: "Alligator Clip Test Leads (5pcs)",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/alligator-clips-320x320.jpg",
    category: "Connectors/Wires",
    description: "Test leads with alligator clips for circuit testing.",
    rating: 4.2,
    inStock: true
  },
  {
    id: 108,
    name: "Banana Plug to Test Lead Set",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/banana-plug-leads-320x320.jpg",
    category: "Connectors/Wires",
    description: "Banana plug test leads for multimeter and power supply connections.",
    inStock: true
  },
  // More Screws/Nuts
  {
    id: 109,
    name: "M4 Stainless Steel Screws (20pcs)",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/m4-screws-320x320.jpg",
    category: "Screws/Nuts",
    description: "M4 stainless steel screws for general purpose fastening.",
    inStock: true
  },
  {
    id: 110,
    name: "M2 Stainless Steel Screws (50pcs)",
    price: 20.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/m2-screws-320x320.jpg",
    category: "Screws/Nuts",
    description: "M2 stainless steel screws for small electronics and PCB mounting.",
    inStock: true
  },
  {
    id: 111,
    name: "Hex Standoff Spacer M3 (10pcs)",
    price: 30.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/hex-standoff-320x320.jpg",
    category: "Screws/Nuts",
    description: "M3 hex standoff spacers for PCB mounting and separation.",
    rating: 4.4,
    inStock: true
  },
  // More Switches/Buttons
  {
    id: 112,
    name: "Toggle Switch SPDT (5pcs)",
    price: 100.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/toggle-switch-320x320.jpg",
    category: "Switches/Buttons",
    description: "Single pole double throw toggle switches for circuit control.",
    inStock: true
  },
  {
    id: 113,
    name: "Slide Switch SPDT (10pcs)",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/slide-switch-320x320.jpg",
    category: "Switches/Buttons",
    description: "Compact slide switches for PCB mounting.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 114,
    name: "Rotary Encoder Module",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rotary-encoder-320x320.jpg",
    category: "Switches/Buttons",
    description: "Rotary encoder with push button for user interface control.",
    inStock: true
  },
  // More 3D Printing Products
  {
    id: 115,
    name: "PLA Filament 1.75mm (1kg)",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/pla-filament-320x320.jpg",
    category: "3D Printing",
    description: "PLA 3D printer filament 1.75mm diameter, 1kg spool.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 116,
    name: "ABS Filament 1.75mm (1kg)",
    price: 950.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/abs-filament-320x320.jpg",
    category: "3D Printing",
    description: "ABS 3D printer filament for durable prints.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 117,
    name: "3D Printer Nozzle 0.4mm Brass",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/printer-nozzle-320x320.jpg",
    category: "3D Printing",
    description: "Standard 0.4mm brass nozzle for FDM 3D printers.",
    inStock: true
  },
  {
    id: 118,
    name: "Heated Bed 220x220mm",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/heated-bed-320x320.jpg",
    category: "3D Printing",
    description: "220x220mm heated bed for 3D printer upgrades.",
    rating: 4.4,
    inStock: true
  },
  // More Starter Kits
  {
    id: 119,
    name: "Arduino Starter Kit Premium",
    price: 2500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-premium-kit-320x320.jpg",
    category: "Starter Kits",
    description: "Premium Arduino starter kit with over 200 components and projects.",
    rating: 4.8,
    inStock: true
  },
  {
    id: 120,
    name: "Raspberry Pi Starter Kit",
    price: 3200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rpi-starter-kit-320x320.jpg",
    category: "Starter Kits",
    description: "Complete Raspberry Pi starter kit with case, power supply, and accessories.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 121,
    name: "IoT Learning Kit ESP32",
    price: 1800.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/iot-learning-kit-320x320.jpg",
    category: "Starter Kits",
    description: "IoT learning kit with ESP32, sensors, and cloud connectivity tutorials.",
    rating: 4.6,
    inStock: true
  },
  // More Programming Boards
  {
    id: 122,
    name: "ESP32-CAM Module",
    price: 550.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/esp32-cam-320x320.jpg",
    category: "Programming Boards",
    description: "ESP32 module with built-in camera for IoT and AI projects.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 123,
    name: "STM32F103C8T6 Blue Pill",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/stm32-blue-pill-320x320.jpg",
    category: "Programming Boards",
    description: "STM32F103C8T6 development board for ARM Cortex-M3 projects.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 124,
    name: "Arduino Mega 2560",
    price: 1800.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-mega-320x320.jpg",
    category: "Programming Boards",
    description: "Arduino Mega 2560 with 54 digital I/O pins for large projects.",
    rating: 4.7,
    inStock: true
  },
  // More Servo Motors
  {
    id: 125,
    name: "MG996R High Torque Servo",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/mg996r-servo-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "High torque servo motor for robotics and automation.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 126,
    name: "DS3218 20kg Digital Servo",
    price: 650.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ds3218-servo-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "20kg digital servo with metal gears for heavy-duty applications.",
    rating: 4.6,
    inStock: true
  },
  // More Stepper Motors
  {
    id: 127,
    name: "NEMA 23 Stepper Motor",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/nema23-stepper-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "NEMA 23 stepper motor for CNC and 3D printer applications.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 128,
    name: "28BYJ-48 Stepper Motor with Driver",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/28byj48-stepper-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Small stepper motor with ULN2003 driver for precision control.",
    rating: 4.3,
    inStock: true
  },
  // More Power Elements
  {
    id: 129,
    name: "DC-DC Boost Converter 5V to 12V",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/boost-converter-320x320.jpg",
    category: "Power Elements",
    description: "Step-up voltage converter from 5V to 12V output.",
    inStock: true
  },
  {
    id: 130,
    name: "Solar Panel 6V 2W",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/solar-panel-320x320.jpg",
    category: "Power Elements",
    description: "6V 2W solar panel for solar power projects.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 131,
    name: "TP4056 Li-ion Charger Module",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tp4056-charger-320x320.jpg",
    category: "Power Elements",
    description: "TP4056 Li-ion battery charger module with protection.",
    rating: 4.6,
    inStock: true
  },
  // More LEDs
  {
    id: 132,
    name: "RGB LED Strip 5M 300 LEDs",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rgb-led-strip-320x320.jpg",
    category: "Electronic Components",
    description: "5 meter RGB LED strip with 300 LEDs and controller.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 133,
    name: "LED Matrix 8x8 Red",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/led-matrix-8x8-320x320.jpg",
    category: "Electronic Components",
    description: "8x8 red LED matrix display for scrolling text and graphics.",
    inStock: true
  },
  {
    id: 134,
    name: "WS2812B Addressable LEDs (50pcs)",
    price: 250.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ws2812b-leds-320x320.jpg",
    category: "Electronic Components",
    description: "50 individually addressable RGB LEDs for creative lighting projects.",
    rating: 4.7,
    inStock: true
  },
  // More Capacitors
  {
    id: 135,
    name: "Super Capacitor 5.5V 0.1F",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/super-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "5.5V 0.1F super capacitor for energy storage applications.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 136,
    name: "Electrolytic Capacitor Kit (100pcs)",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/electrolytic-cap-kit-320x320.jpg",
    category: "Electronic Components",
    description: "Assorted electrolytic capacitor kit with various voltage ratings.",
    rating: 4.5,
    inStock: true
  },
  // More Integrated Circuits
  {
    id: 137,
    name: "ATmega328P-PU Microcontroller",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/atmega328p-320x320.jpg",
    category: "Electronic Components",
    description: "ATmega328P microcontroller chip for Arduino projects.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 138,
    name: "DS3231 Real Time Clock Module",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ds3231-rtc-320x320.jpg",
    category: "Electronic Components",
    description: "High precision real time clock module with battery backup.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 139,
    name: "SD Card Module",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/sd-card-module-320x320.jpg",
    category: "Electronic Modules",
    description: "SD card module for data storage and logging applications.",
    rating: 4.4,
    inStock: true
  },
  // More Robotics
  {
    id: 140,
    name: "Robot Arm Kit 4DOF with Gripper",
    price: 2500.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/robot-arm-4dof-320x320.jpg",
    category: "Robotics",
    description: "4DOF robot arm kit with servo gripper for pick and place applications.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 141,
    name: "Line Following Sensor Array",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/line-sensor-array-320x320.jpg",
    category: "Robotics",
    description: "8-channel line following sensor array for autonomous robot navigation.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 142,
    name: "Obstacle Avoidance Sensor Kit",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/obstacle-sensor-kit-320x320.jpg",
    category: "Robotics",
    description: "Multi-sensor obstacle detection kit for autonomous robots.",
    inStock: true
  },
  // Missing Bluepack Nova Products - RGB LED
  {
    id: 143,
    name: "RGB LED 5MM 4 Pin",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rgb-led-5mm-320x320.jpg",
    category: "Electronic Components",
    description: "5mm RGB LED with 4 pins for full color control in projects.",
    rating: 4.2,
    inStock: true
  },
  // Missing Bluepack Nova Products - More Transistors
  {
    id: 144,
    name: "NE555P High Precision Timer",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ne555p-timer-320x320.jpg",
    category: "Electronic Components",
    description: "High precision NE555 timer IC for accurate timing applications.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 145,
    name: "PNP L7805C Voltage Regulator",
    price: 15.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/l7805c-320x320.jpg",
    category: "Electronic Components",
    description: "PNP L7805C voltage regulator for stable 5V output.",
    inStock: true
  },
  {
    id: 146,
    name: "PNP BC327 Transistor",
    price: 5.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/bc327-transistor-320x320.jpg",
    category: "Electronic Components",
    description: "PNP BC327 transistor for switching and amplification applications.",
    inStock: true
  },
  {
    id: 147,
    name: "L7812CV Voltage Regulator",
    price: 18.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/l7812cv-320x320.jpg",
    category: "Electronic Components",
    description: "12V positive voltage regulator L7812CV for power supply circuits.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 148,
    name: "NPN IRF540 Transistor",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/irf540-transistor-320x320.jpg",
    category: "Electronic Components",
    description: "IRF540 N-channel MOSFET transistor for high power switching.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 149,
    name: "IRFZ44N MOSFET",
    price: 28.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/irfz44n-320x320.jpg",
    category: "Electronic Components",
    description: "IRFZ44N N-channel MOSFET for efficient power switching applications.",
    inStock: true
  },
  {
    id: 150,
    name: "NPN 2N7000 Transistor",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/2n7000-transistor-320x320.jpg",
    category: "Electronic Components",
    description: "2N7000 N-channel MOSFET for low power switching applications.",
    inStock: true
  },
  {
    id: 151,
    name: "NPN MPSA06 Transistor",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/mpsa06-transistor-320x320.jpg",
    category: "Electronic Components",
    description: "MPSA06 NPN transistor for high voltage switching applications.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 152,
    name: "NPN TIP31 Transistor",
    price: 15.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tip31-transistor-320x320.jpg",
    category: "Electronic Components",
    description: "TIP31 NPN power transistor for high current applications.",
    rating: 4.5,
    inStock: true
  },
  // Missing Bluepack Nova Products - More Capacitors
  {
    id: 153,
    name: "50V 1UF Capacitor",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/1uf-50v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "50V 1uF capacitor for general purpose filtering and coupling.",
    inStock: true
  },
  {
    id: 154,
    name: "10V 470uF Capacitor",
    price: 12.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/470uf-10v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "10V 470uF electrolytic capacitor for power supply filtering.",
    inStock: true
  },
  {
    id: 155,
    name: "50V 0.1uF Capacitor",
    price: 6.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/0.1uf-50v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "50V 0.1uF ceramic capacitor for high frequency applications.",
    inStock: true
  },
  {
    id: 156,
    name: "50V 4.7 uF Capacitor",
    price: 10.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/4.7uf-50v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "50V 4.7uF capacitor for timing and coupling circuits.",
    inStock: true
  },
  {
    id: 157,
    name: "50V 0.47 uF Capacitor",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/0.47uf-50v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "50V 0.47uF capacitor for precision timing applications.",
    inStock: true
  },
  {
    id: 158,
    name: "16V 47uF Capacitor",
    price: 8.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/47uf-16v-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "16V 47uF electrolytic capacitor for audio and signal processing.",
    inStock: true
  },
  {
    id: 159,
    name: "2.2µF 275VAC X2 Metallized Polypropylene Film Capacitor",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/x2-capacitor-320x320.jpg",
    category: "Electronic Components",
    description: "X2 metallized polypropylene film capacitor for AC line filtering.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 160,
    name: "Supercapacitor 2.7V 10F",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/supercapacitor-2.7v-10f-320x320.jpg",
    category: "Electronic Components",
    description: "2.7V 10F supercapacitor for energy storage and backup power.",
    rating: 4.6,
    inStock: true
  },
  // Missing Bluepack Nova Products - Arduino Boards
  {
    id: 161,
    name: "Arduino USB Cable",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-usb-cable-320x320.jpg",
    category: "Programming Boards",
    description: "Official Arduino USB cable for programming and power supply.",
    inStock: true
  },
  {
    id: 162,
    name: "Arduino Nano Cable",
    price: 60.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-nano-cable-320x320.jpg",
    category: "Programming Boards",
    description: "Arduino Nano programming cable with USB connector.",
    inStock: true
  },
  {
    id: 163,
    name: "Arduino UNO R3 V5.0 Expansion Board",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/uno-expansion-board-320x320.jpg",
    category: "Programming Boards",
    description: "Arduino UNO R3 V5.0 expansion board with additional features.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 164,
    name: "Arduino Pro Mini 5V/16MHz ATMEGA 328P",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-pro-mini-320x320.jpg",
    category: "Programming Boards",
    description: "Arduino Pro Mini 5V 16MHz with ATMEGA 328P microcontroller.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 165,
    name: "Arduino Nano ATmega328P 5V Microcontroller",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-nano-atmega328p-320x320.jpg",
    category: "Programming Boards",
    description: "Arduino Nano with ATmega328P 5V microcontroller board.",
    rating: 4.7,
    inStock: true
  },
  {
    id: 166,
    name: "Arduino Uno",
    price: 1200.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/arduino-uno-320x320.jpg",
    category: "Programming Boards",
    description: "Standard Arduino Uno board for prototyping and development.",
    rating: 4.8,
    inStock: true
  },
  // Missing Bluepack Nova Products - Cameras
  {
    id: 167,
    name: "Raspberry Pi Camera 5MP Module",
    price: 850.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/rpi-camera-5mp-320x320.jpg",
    category: "Electronic Modules",
    description: "5MP Raspberry Pi camera module for high-quality imaging projects.",
    rating: 4.6,
    inStock: true
  },
  // Missing Bluepack Nova Products - Additional Items
  {
    id: 168,
    name: "Storage Box",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/storage-box-320x320.jpg",
    category: "Project parts",
    description: "Durable storage box for organizing electronic components.",
    rating: 4.3,
    inStock: true
  },
  // Additional Common Bluepack Nova Products
  {
    id: 169,
    name: "Breadboard 400 Points",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/breadboard-400-320x320.jpg",
    category: "Project parts",
    description: "400-point solderless breadboard for circuit prototyping.",
    inStock: true
  },
  {
    id: 170,
    name: "Multimeter Digital",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/digital-multimeter-320x320.jpg",
    category: "Project parts",
    description: "Digital multimeter for voltage, current, and resistance measurement.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 171,
    name: "Soldering Iron 25W",
    price: 250.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/soldering-iron-25w-320x320.jpg",
    category: "Project parts",
    description: "25W soldering iron for electronics assembly and repair.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 172,
    name: "Solder Wire 1mm 100g",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/solder-wire-320x320.jpg",
    category: "Project parts",
    description: "1mm solder wire 100g roll for electronics soldering.",
    inStock: true
  },
  {
    id: 173,
    name: "PCB Board Prototype 5x7cm",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/pcb-board-5x7cm-320x320.jpg",
    category: "Project parts",
    description: "5x7cm prototype PCB board for custom circuit design.",
    inStock: true
  },
  {
    id: 174,
    name: "Heat Shrink Tube Assorted (100pcs)",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/heat-shrink-tube-320x320.jpg",
    category: "Project parts",
    description: "Assorted heat shrink tube set for wire insulation and protection.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 175,
    name: "Wire Stripper Tool",
    price: 150.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/wire-stripper-320x320.jpg",
    category: "Project parts",
    description: "Professional wire stripper tool for electronics work.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 176,
    name: "Precision Screwdriver Set (30pcs)",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/screwdriver-set-320x320.jpg",
    category: "Project parts",
    description: "30-piece precision screwdriver set for electronics repair.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 177,
    name: "Helping Hands Tool with Magnifier",
    price: 220.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/helping-hands-320x320.jpg",
    category: "Project parts",
    description: "Helping hands tool with magnifier for precision soldering.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 178,
    name: "Digital Caliper 150mm",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/digital-caliper-320x320.jpg",
    category: "Project parts",
    description: "150mm digital caliper for precise measurements.",
    rating: 4.7,
    inStock: true
  },
  // More Electronic Components
  {
    id: 179,
    name: "Photoresistor LDR 55mm",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/photoresistor-ldr-320x320.jpg",
    category: "Electronic Components",
    description: "55mm photoresistor LDR for light detection applications.",
    inStock: true
  },
  {
    id: 180,
    name: "Thermistor NTC 10K",
    price: 20.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/thermistor-ntc-320x320.jpg",
    category: "Electronic Components",
    description: "NTC 10K thermistor for temperature sensing.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 181,
    name: "Buzzer Active 12V",
    price: 45.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/buzzer-12v-320x320.jpg",
    category: "Electronic Components",
    description: "12V active buzzer for audio signaling applications.",
    inStock: true
  },
  {
    id: 182,
    name: "Piezo Buzzer 5V",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/piezo-buzzer-5v-320x320.jpg",
    category: "Electronic Components",
    description: "5V piezo buzzer for sound generation in projects.",
    inStock: true
  },
  {
    id: 183,
    name: "Relay 5V 1 Channel",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/relay-5v-1ch-320x320.jpg",
    category: "Power Elements",
    description: "Single channel 5V relay for switching applications.",
    rating: 4.2,
    inStock: true
  },
  {
    id: 184,
    name: "Relay 12V 1 Channel",
    price: 90.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/relay-12v-1ch-320x320.jpg",
    category: "Power Elements",
    description: "Single channel 12V relay for higher voltage switching.",
    inStock: true
  },
  // More Power Related Products
  {
    id: 185,
    name: "Power Supply 12V 2A",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/power-supply-12v-2a-320x320.jpg",
    category: "Power Elements",
    description: "12V 2A regulated power supply for projects.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 186,
    name: "Power Supply 5V 3A",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/power-supply-5v-3a-320x320.jpg",
    category: "Power Elements",
    description: "5V 3A power supply for Arduino and microcontroller projects.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 187,
    name: "DC Barrel Jack Adapter 2.1mm",
    price: 25.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/barrel-jack-adapter-320x320.jpg",
    category: "Power Elements",
    description: "2.1mm DC barrel jack adapter for power connections.",
    inStock: true
  },
  // More Display Products
  {
    id: 188,
    name: "7 Segment Display 4 Digit",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/7-segment-4digit-320x320.jpg",
    category: "Electronic Modules",
    description: "4-digit 7-segment display for numeric readouts.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 189,
    name: "LED Display 0.56 inch 4 Digit",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/led-display-0.56-320x320.jpg",
    category: "Electronic Modules",
    description: "0.56 inch 4-digit LED display for compact applications.",
    inStock: true
  },
  {
    id: 190,
    name: "TFT Touch Display 2.8 inch",
    price: 650.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tft-touch-2.8-320x320.jpg",
    category: "Electronic Modules",
    description: "2.8 inch TFT touch screen display for interactive projects.",
    rating: 4.5,
    inStock: true
  },
  // More Sensor Products
  {
    id: 191,
    name: "IR Infrared Obstacle Avoidance Sensor",
    price: 80.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/ir-obstacle-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "IR infrared obstacle detection sensor for robots.",
    rating: 4.4,
    inStock: true
  },
  {
    id: 192,
    name: "Flame Sensor Module",
    price: 120.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/flame-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Flame detection sensor module for fire safety applications.",
    rating: 4.3,
    inStock: true
  },
  {
    id: 193,
    name: "Sound Sensor Module",
    price: 100.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/sound-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Sound detection sensor module for audio-responsive projects.",
    inStock: true
  },
  {
    id: 194,
    name: "Vibration Sensor Module",
    price: 90.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/vibration-sensor-320x320.jpg",
    category: "Electronic Modules",
    description: "Vibration detection sensor for motion sensing applications.",
    rating: 4.2,
    inStock: true
  },
  // More Communication Modules
  {
    id: 195,
    name: "HC-05 Bluetooth Module",
    price: 280.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/hc-05-bluetooth-320x320.jpg",
    category: "Electronic Modules",
    description: "HC-05 Bluetooth module for wireless communication.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 196,
    name: "LoRa SX1278 Module 433MHz",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/lora-sx1278-320x320.jpg",
    category: "Electronic Modules",
    description: "LoRa SX1278 433MHz module for long-range wireless communication.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 197,
    name: "SIM800L GSM Module",
    price: 550.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/sim800l-gsm-320x320.jpg",
    category: "Electronic Modules",
    description: "SIM800L GSM module for cellular communication projects.",
    rating: 4.4,
    inStock: true
  },
  // More Motor Related Products
  {
    id: 198,
    name: "DC Gear Motor 12V 200RPM",
    price: 450.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/dc-gear-motor-12v-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "12V DC gear motor with 200RPM for robotics applications.",
    rating: 4.5,
    inStock: true
  },
  {
    id: 199,
    name: "Stepper Motor Driver TB6600",
    price: 350.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/tb6600-driver-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "TB6600 stepper motor driver for precise motor control.",
    rating: 4.6,
    inStock: true
  },
  {
    id: 200,
    name: "Servo Tester",
    price: 180.00,
    image: "https://bluepacknova.com/wp-content/uploads/2024/11/servo-tester-320x320.jpg",
    category: "Motors, Drivers & Actuators",
    description: "Servo tester for testing and calibrating servo motors.",
    rating: 4.3,
    inStock: true
  }
];

const categories = [
  "All Products",
  "3D Printing",
  "Starter Kits",
  "Connectors/Wires", 
  "Screws/Nuts",
  "Switches/Buttons",
  "Drone Parts",
  "Electronic Modules",
  "Motors, Drivers & Actuators",
  "Power Elements",
  "Project parts",
  "Robotics",
  "Electronic Components",
  "Programming Boards"
];

const categoryHierarchy = {
  "Electronic Modules": ["Cameras", "Communication", "Displays", "Interface modules", "More modules", "Navigation/Antennas", "Serial Elements"],
  "Motors, Drivers & Actuators": ["Attachments", "Motor", "Motor drivers", "Servo Motors", "Stepper Motor"],
  "Power Elements": ["BMS", "Chargers & Adapters", "Relays", "Volatge Controllers", "Battery", "Li-ion Batteries", "Li-Po Batteries"],
  "Project parts": ["Accessories", "Pumps/Valves"],
  "Robotics": ["Coupling", "Wheels"],
  "Programming Boards": ["Dev boards", "STM Boards", "Arduino boards"]
};

const LOCAL_IMAGE_FILES = new Set([
  "100-20-pcs-bc547-high-quality-who-original-imaggvphbyxyht8k-320x320.webp",
  "51J8hvPyNBL-320x320.jpg",
  "5mm-LED-320x320.jpg",
  "capacitors-1-320x320.jpg",
  "img_1451-320x320.jpeg",
  "img_6308-320x320.jpeg",
  "img_6310-1-320x320.jpeg",
  "img_6751-320x320.png",
  "img_9539-320x320.jpeg",
  "LED3WULB.jpg",
  "m3-x-10-phillips-pan-head-screw-din-7985h-a4-1-22460-p-320x320.png",
  "m3-x-12-phillips-pan-head-screw-din-7985h-a4-1-22461-p-320x320.png",
  "m3-x-8-phillips-pan-head-screw-din-7985h-a2-1-22332-p-320x320.png",
  "sc-npn-2n2222_lrg_grobo-320x320.png",
  "s-l1200-320x320.jpg",
  "s-l1200-4-320x320.jpg",
  "transistor_bc337_2509_1_f65f7acb454662eea1c035c60ba15c2b-320x320.webp",
  "transistor-jfet-2n5459-2N5459THT-320x320.jpg",
  "tranzistor-pnp-2n3906-320x320.jpg",
  "yellow-led-3mm-diffused-600x600-1-320x320.jpg"
]);

const PRODUCT_PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><rect width="320" height="320" fill="#f3f4f6"/><rect x="56" y="70" width="208" height="180" rx="14" fill="#d1d5db"/><path d="M95 197l45-45a12 12 0 0117 0l28 28 24-24a12 12 0 0117 0l39 39" fill="none" stroke="#6b7280" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="127" cy="118" r="16" fill="#9ca3af"/><text x="160" y="284" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" fill="#4b5563">Image unavailable</text></svg>'
)}`;
const KNOWN_BROKEN_BLUEPACK_PREFIX = "https://bluepacknova.com/wp-content/uploads/2024/11/";

const getFileNameFromImageUrl = (imageUrl: string) => {
  const baseUrl = imageUrl.split("?")[0];
  const parts = baseUrl.split("/");
  return parts[parts.length - 1] || "";
};

const resolveProductImage = (imageUrl: string) => {
  if (imageUrl.startsWith("/images/")) {
    return imageUrl;
  }

  const fileName = getFileNameFromImageUrl(imageUrl);
  if (LOCAL_IMAGE_FILES.has(fileName)) {
    return `/images/${fileName}`;
  }

  if (imageUrl.startsWith(KNOWN_BROKEN_BLUEPACK_PREFIX)) {
    return PRODUCT_PLACEHOLDER_IMAGE;
  }

  return imageUrl;
};

const applyFallbackImage = (event: SyntheticEvent<HTMLImageElement>) => {
  const target = event.currentTarget;
  if (target.dataset.fallbackApplied === "true") {
    return;
  }

  target.dataset.fallbackApplied = "true";
  target.src = PRODUCT_PLACEHOLDER_IMAGE;
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [showQuickView, setShowQuickView] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const [imgLoading, setImgLoading] = useState(true);
    
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <div className="relative">
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            {imgLoading && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0B1E3B]"></div>
              </div>
            )}
            <img 
              src={resolveProductImage(product.image)}
              alt={product.name}
              className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImgLoading(false)}
              onError={(event) => {
                applyFallbackImage(event);
                setImgLoading(false);
              }}
            />
          </div>
          <button
            onClick={() => setShowQuickView(product)}
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          >
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
          {product.rating && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {product.rating}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
            {product.name}
          </h3>
          
          <p className="text-lg font-bold text-[#D62828] mb-2">
            KSh {product.price.toFixed(2)}
          </p>
          
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full bg-[#0B1E3B] text-white py-2 px-4 rounded-lg hover:bg-[#1a2f4a] transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Shop Header with Search and Cart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-[#0B1E3B]">Shop</h1>
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828] focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 bg-[#0B1E3B] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D62828] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-800">Categories</h2>
                <Filter className="w-4 h-4 text-gray-500" />
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {categories.map((category) => {
                  const isSubcategory = Object.values(categoryHierarchy).some(subcategories => 
                    subcategories.includes(category)
                  );
                  const parentCategory = Object.entries(categoryHierarchy).find(([, subcategories]) => 
                    subcategories.includes(category)
                  )?.[0];
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#D62828] text-white'
                          : isSubcategory
                          ? 'text-gray-600 hover:bg-gray-100 pl-6'
                          : 'text-gray-700 hover:bg-gray-100 font-medium'
                      }`}
                    >
                      {isSubcategory && parentCategory && (
                        <span className="text-xs opacity-60 mr-2">{parentCategory}</span>
                      )}
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results count */}
            <div className="mb-6 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{showQuickView.name}</h2>
                <button
                  onClick={() => setShowQuickView(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <img 
                    src={resolveProductImage(showQuickView.image)} 
                    alt={showQuickView.name}
                    className="w-full rounded-lg object-cover"
                    onError={applyFallbackImage}
                  />
                  {/* Stock Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      showQuickView.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {showQuickView.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Price and Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-3xl font-bold text-[#D62828]">
                        KSh {showQuickView.price.toFixed(2)}
                      </p>
                      {showQuickView.rating && (
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${
                                i < Math.floor(showQuickView.rating!) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {showQuickView.rating} ({Math.floor(Math.random() * 50) + 10} reviews)
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Brand and Model */}
                    {(showQuickView.brand || showQuickView.model) && (
                      <div className="flex gap-4 text-sm text-gray-600">
                        {showQuickView.brand && <span>Brand: <strong>{showQuickView.brand}</strong></span>}
                        {showQuickView.model && <span>Model: <strong>{showQuickView.model}</strong></span>}
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                    <p className="text-gray-600 leading-relaxed">{showQuickView.description}</p>
                  </div>
                  
                  {/* Key Features */}
                  {showQuickView.features && showQuickView.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {showQuickView.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Specifications */}
                  {showQuickView.specifications && Object.keys(showQuickView.specifications).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <dl className="space-y-2">
                          {Object.entries(showQuickView.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                              <dt className="text-sm font-medium text-gray-600 capitalize">{key.replace(/_/g, ' ')}</dt>
                              <dd className="text-sm text-gray-900 font-semibold">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  )}
                  
                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {showQuickView.weight && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-semibold ml-2">{showQuickView.weight}</span>
                      </div>
                    )}
                    {showQuickView.dimensions && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-600">Dimensions:</span>
                        <span className="font-semibold ml-2">{showQuickView.dimensions}</span>
                      </div>
                    )}
                    {showQuickView.warranty && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-600">Warranty:</span>
                        <span className="font-semibold ml-2">{showQuickView.warranty}</span>
                      </div>
                    )}
                    {showQuickView.shipping && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="font-semibold ml-2">{showQuickView.shipping}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Category */}
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {showQuickView.category}
                    </span>
                  </div>
                  
                  {/* Availability Info */}
                  {showQuickView.availability && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Availability:</strong> {showQuickView.availability}
                      </p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => {
                      handleAddToCart(showQuickView);
                      setShowQuickView(null);
                    }}
                    className="w-full bg-[#0B1E3B] text-white py-3 px-6 rounded-lg hover:bg-[#1a2f4a] transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Shopping Cart ({getTotalItems()})</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => {
                      return (
                        <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                          <div className="relative w-20 h-20 bg-gray-100">
                            <img
                              src={resolveProductImage(item.image)}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded"
                              onError={applyFallbackImage}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                            <p className="text-[#D62828] font-semibold">KSh {item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                              >
                                +
                              </button>
                              <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="ml-auto text-red-500 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-[#D62828]">KSh {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setShowCheckout(true);
                    }}
                    className="w-full bg-[#0B1E3B] text-white py-3 rounded-lg hover:bg-[#1a2f4a] transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCheckout(false)} />
          <div className="absolute inset-4 md:inset-8 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="h-full flex flex-col">
              {/* Checkout Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">Checkout</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Checkout Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-2xl mx-auto">
                  {/* Order Summary */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>KSh {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span className="text-[#D62828]">KSh {getTotalPrice().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Shipping Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D62828]"
                        required
                      />
                    </form>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" defaultChecked />
                        <span>Cash on Delivery</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <span>Mobile Money (M-Pesa, Airtel Money)</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="mr-3" />
                        <span>Bank Transfer</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Checkout Footer */}
              <div className="border-t p-6">
                <div className="max-w-2xl mx-auto">
                  <button
                    onClick={() => {
                      alert('Order placed successfully! We will contact you soon.');
                      setCartItems([]);
                      setShowCheckout(false);
                    }}
                    className="w-full bg-[#D62828] text-white py-3 rounded-lg hover:bg-[#b91d1d] transition-colors font-semibold"
                  >
                    Place Order - KSh {getTotalPrice().toFixed(2)}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    By placing this order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
