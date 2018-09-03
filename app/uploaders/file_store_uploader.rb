class FileStoreUploader < BaseUploader
  storage :file

  def extension_whitelist
    %w[jpg jpeg png mp4]
  end
end
