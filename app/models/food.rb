class Food < ActiveRecord::Base
  	validates :name, :price, presence: {message: "Nosaukuma lauks nedrīkst būt tukšs"}
  	validates :name, uniqueness: {message: "Nosaukuma lauka ieraksts ar šādu nosaukumu jau eksistē"}
  	validates :price, numericality: {greater_than_or_equal_to: 0.05, message: "Cenas laukā, skaitlim jābūt pozitīvam"}

  	validates :group_id, presence: true,  unless: :subgroup_id?;
  	validates :subgroup_id, presence: true, unless: :group_id?;

  	validates :group_id, absence: {message: "Izvēlēta gan grupa gan apakšgrupa (izvēlies tikai vienu)"}, if: :subgroup_id?

	belongs_to :group;
	belongs_to :subgroup;
end
