package com.clone.instagram.authservice.messaging;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface Test {

    String OUTPUT = "test";

    @Output(OUTPUT)
    MessageChannel test();
}
