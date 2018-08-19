class PinpicSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  rescue_from Mongoid::Errors::DocumentNotFound, &:problem
end
