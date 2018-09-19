class ImageUploader < BaseUploader

  process :store_dimensions

  def extension_whitelist
    %w[jpg jpeg png mp4]
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.imageable.class.to_s.underscore}/#{model.id}"
  end

  def filename
    model.id
  end

  private

  def store_dimensions
    if file && model
      model.width, model.height = ::MiniMagick::Image.open(file.file).dimensions
    end
  end
end
