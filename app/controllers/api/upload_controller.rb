class Api::UploadController < Api::BaseController
  before_action :authorize

  def create
    file_store = current_user.file_stores.new(file_store_params)

    if file_store.save
      json = file_store.as_json(
        only: %i[_id user_id],
        methods: %i[file_url],
        root: true
      )
      render json: { data: json }, status: 201
    else
      render json: { errors: file_store.errors.full_messages }, status: 422
    end
  end

  private

  def file_store_params
    params.permit(:file)
  end

  def authorize
    render json: { errors: ["Not login"] }, status: 401 unless current_user
  end
end
