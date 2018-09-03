cities = [
  "Bandung",
  "Jakarta",
  "Surabaya",
  "Pangandaran"
]

cities.each do |city|
  City.find_or_create_by(name: city)
end
