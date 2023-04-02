package com.example.SeekerRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.SeekerModel.SeekerModelClass;

public interface SeekerRepositoryInterface extends MongoRepository<SeekerModelClass,Long>{

}
