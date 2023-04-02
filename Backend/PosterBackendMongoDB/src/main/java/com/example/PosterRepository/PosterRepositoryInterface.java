package com.example.PosterRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.PosterModel.PosterModelClass;

public interface PosterRepositoryInterface extends MongoRepository<PosterModelClass,Long> {

}
