class CreateSolarHomes < ActiveRecord::Migration
  def change
    create_table :solar_homes do |t|
      t.string :full_address
      t.float :latitude
      t.float :longitude
    end
  end
end
