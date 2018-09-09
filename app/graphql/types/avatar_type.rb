module Types
  class AvatarType < Types::BaseObject
    field :original, String, null: true
    field :thumb, String, null: true

    def original
      object.url
    end

    def thumb
      object.thumb.url
    end
  end
end
