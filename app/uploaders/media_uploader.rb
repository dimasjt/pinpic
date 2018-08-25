class MediaUploader < BaseUploader
  def extension_whitelist
    %w(jpg jpeg png mp4)
  end
end
