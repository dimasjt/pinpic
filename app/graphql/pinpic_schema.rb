class PinpicSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  rescue_from [ActiveRecord::RecordInvalid, ActiveRecord::RecordNotFound], &:message
end
