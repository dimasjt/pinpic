cities = [
  "Bandung",
  "Jakarta",
  "Surabaya",
  "Pangandaran"
]

cities.each do |city|
  City.find_or_create_by(name: city)
end

tags = [
  "Outdoor",
  "Pool",
  "Lake",
  "Mountain",
  "Beach",
  "Forest",
  "City"
]

tags.each do |tag|
  Tag.find_or_create_by(name: tag)
end
