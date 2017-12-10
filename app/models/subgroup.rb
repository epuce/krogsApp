class Subgroup < ActiveRecord::Base
  has_one :group
  has_many :foods
  validates :name, presence: true
end
