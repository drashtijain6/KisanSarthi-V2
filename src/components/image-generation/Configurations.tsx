"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

// Define the schema using Zod
const formSchema = z.object({
  district: z.string().nonempty("District is required"),
  soil_color: z.string().nonempty("Soil color is required"),
  nitrogen: z.number().min(0, "Nitrogen must be a positive number").max(300, "Nitrogen must be less than 100"),
  phosphorus: z.number().min(0, "Phosphorus must be a positive number").max(300, "Phosphorus must be less than 100"), 
  potassium: z.number().min(0, "Potassium must be a positive number").max(300, "must be less than 300"),
  pH: z.number().min(0, "pH must be a positive number").max(14, "must be less than 14"),
  rainfall: z.number().min(0, "Rainfall must be a positive number"),
  temperature: z.number().min(0, "Temperature must be a positive number"),
  crop: z.string().nonempty("Crop type is required"),
});

// Infer the TypeScript type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function FertilizerForm() {
  const [result, setResult] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      district: "",
      soil_color: "",
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0,
      pH: 0,
      rainfall: 0,
      temperature: 0,
      crop: "",
    },
  });

  // Fetch weather data based on the selected district
  const fetchWeatherData = async (district: string) => {
    try {
      setLoadingWeather(true);
      const apiKey = "52a444be96eb424ba6a173011253103";
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${district}`
      );
      const data = await response.json();

      console.log(data);

      if (data && data.current) {
        const rainfall = data.current.pressure_mb;
        const temperature = data.current.temp_c;
        form.setValue("rainfall", rainfall);
        form.setValue("temperature", temperature);
      } else {
        console.error("Invalid response from WeatherAPI");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoadingWeather(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.recommended_fertilizer) {
        setResult(data.recommended_fertilizer);
      } else {
        setResult("Error in prediction");
      }
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error connecting to the backend");
      setIsDialogOpen(true);
    }
  };

  return (
    <TooltipProvider>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white rounded-2xl p-5 w-full max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <fieldset className="grid gap-3 p-3 bg-background rounded-lg border">
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>District</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            fetchWeatherData(value);
                          }}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select district" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Kolhapur">Kolhapur</SelectItem>
                            <SelectItem value="Solapur">Solapur</SelectItem>
                            <SelectItem value="Satara">Satara</SelectItem>
                            <SelectItem value="Sangli">Sangli</SelectItem>
                            <SelectItem value="Pune">Pune</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="soil_color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soil Color</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select soil color" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Black">Black</SelectItem>
                            <SelectItem value="Red">Red</SelectItem>
                            <SelectItem value="Medium Brown">
                              Medium Brown
                            </SelectItem>
                            <SelectItem value="Dark Brown">
                              Dark Brown
                            </SelectItem>
                            <SelectItem value="Light Brown">
                              Light Brown
                            </SelectItem>
                            <SelectItem value="Reddish Brown">
                              Reddish Brown
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="nitrogen"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nitrogen (N)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter nitrogen level"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phosphorus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phosphorus (P)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter phosphorus level"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="potassium"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Potassium (K)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter potassium level"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="pH"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>pH Level</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="Enter pH level"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rainfall"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rainfall (mm)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter rainfall in mm"
                            {...field}
                            value={field.value || ""}
                            readOnly
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="temperature"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Temperature (°C)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter temperature in °C"
                            {...field}
                            value={field.value || ""}
                            readOnly
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="crop"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Crop Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select crop type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Wheat">Wheat</SelectItem>
                            <SelectItem value="Rice">Rice</SelectItem>
                            <SelectItem value="Maize">Maize</SelectItem>
                            <SelectItem value="Sugarcane">Sugarcane</SelectItem>
                            <SelectItem value="Cotton">Cotton</SelectItem>
                            <SelectItem value="Tur">Tur</SelectItem>
                            <SelectItem value="Urad">Urad</SelectItem>
                            <SelectItem value="Masoor">Masoor</SelectItem>
                            <SelectItem value="Soyabean">Soyabean</SelectItem>
                            <SelectItem value="Ginger">Ginger</SelectItem>
                            <SelectItem value="Turmeric">Turmeric</SelectItem>
                            <SelectItem value="Grapes">Grapes</SelectItem>
                            <SelectItem value="Jowar">Jowar</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loadingWeather}
                >
                  {loadingWeather ? "Loading Weather..." : "Predict"}
                </Button>
              </fieldset>
            </form>
          </Form>
        </div>
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent className="bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg rounded-lg">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-bold text-center text-gray-800">
                Recommended Fertilizer
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-lg text-gray-600 mt-2">
                <span className="font-semibold text-gray-800">{result}</span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex justify-center">
              <Button
                className=" text-white px-6 py-2 rounded-lg w-full"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </TooltipProvider>
  );
}
