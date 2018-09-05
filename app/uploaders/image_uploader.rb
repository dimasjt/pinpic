class ImageUploader < BaseUploader

  process :store_dimensions

  def extension_whitelist
    %w[jpg jpeg png mp4]
  end

  private

  def store_dimensions
    if file && model
      model.width, model.height = ::MiniMagick::Image.open(file.file).dimensions
    end
  end
end
