namespace :importer do
  desc "Import places data from CSV and images"
  task place: :environment do
    admin = User.find_by(email: "hello@dimasjt.com")
    CSV.foreach("places_data.csv", headers: true) do |row|
      location = { lat: row[1], lng: row[2] }
      address = row[3]
      tags = row[4].split(", ")
      city = City.find_by(name: row[5])

      place = Place.find_or_initialize_by(name: row[0])
      place.assign_attributes(
        location: location,
        address: address,
        user: admin,
        city: city
      )
      place.save
      Dir.glob(Rails.root.join("image/places/#{place.slug}/*")).each do |f|
        place.images.create(file: File.open(f))
      end

      puts place.slug
    end
  end
end
