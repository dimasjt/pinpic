class Api::UploadController < Api::BaseController
  before_action :authorize

  def create
    if file_stores.length.positive?
      json = file_stores.as_json(
        only: :_id,
        methods: %i[file_url]
      )
      render json: { data: { file_stores: json } }, status: 201
    else
      render json: { errors: ["Files can\'t be blank"] }, status: 422
    end
  end

  private

  def file_store_params
    params.permit(files: []).fetch(:files, []).select do |file|
      file.respond_to? :read
    end
  end

  def file_stores
    @file_stores ||= file_store_params.map do |file|
      current_user.file_stores.create(file: file)
    end
  end

  def authorize
    render json: { errors: ["Not login"] }, status: 401 unless current_user
  end
end
